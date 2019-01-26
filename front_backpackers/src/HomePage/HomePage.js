import React, { Component } from "react";
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import axios from "axios";
import { geolocated } from "react-geolocated";
import Chatkit from "@pusher/chatkit";

import ActivityThumbnail from "./ActivityThumbnail";
import PlaceThumbnail from "./PlaceThumbnail";
import DropdownButton from "./DropdownButton";
import BurgerButton from "./BurgerButton";
import Sidebar from "./Sidebar";
import { Spring } from "react-spring";

import "./HomePage.scss";
import MapsContainer from "../containers/MapsContainer";
import PositionToast from "../Toast/Toastify";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false,
      collapsed: true,
      activeTab: "1"
      // idParticipation: []
    };
    this.toggle = this.toggle.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  componentDidMount() {
    this.callApiProfile();
    //  this.props.fetchActivities();
    this.callApiActivities();
    // this.props.fetchPlaces();
    this.callApiPlaces();
    // this.callApiParticipation();
  }

  callApiProfile() {
    axios
      .get(`/api/profile`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => {
        this.props.viewProfile([{ ...response.data[0], activities: [] }]);
      })
      .then(() =>
        axios
          .post("/api/users", {
            username: this.props.profile[0].username
          })
          .catch(error => {
            console.log(error);
          })
      )
      .then(() => {
        const chatManager = new Chatkit.ChatManager({
          instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
          userId: this.props.profile[0].username,
          tokenProvider: new Chatkit.TokenProvider({
            url: "/api/authenticate"
          })
        });
        chatManager.connect().then(currentUser => {
          this.setState({ currentUser });
        });
      });
  }

  callApiPlaces() {
    axios
      .get("/api/places")
      .then(response => this.props.viewPlaces(response.data));
  }

  callApiParticipation() {
    axios
      .get(`/api/profile/${this.props.profile.id}/activities`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => this.setState({ idParticipation: response.data }));
  }

  callApiActivities() {
    axios
      .get("/api/activities")
      .then(response => this.props.viewActivities(response.data));
    // .then(() =>
    //   console.log(
    //     this.props.coords.latitude,
    //     this.props.coords.longitude
    //   ))
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggleMap(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  drawerToggleClickHandler() {
    this.props.openMenu();
  }

  backdropClickHandler() {
    this.props.closeMenu();
  }

  render() {
    return (
      <div className="homePage">
        <PositionToast />
        <Row className="blueHeader">
          <Col xs="2">
            <BurgerButton
              drawerToggleClickHandler={this.drawerToggleClickHandler}
            />
            <Sidebar
              {...this.props.profile[0]}
              show={this.props.menu}
              backdropClickHandler={this.backdropClickHandler}
            />
          </Col>
          <Col xs="8">
            {this.state.activeTab === "1" ? (
              <DropdownButton
                className="w-100"
                view={this.props.displayHomePage}
                dropdownOpen={this.state.dropdownOpen}
                toggle={this.toggle}
                changeViewToActivities={this.props.displayActivities}
                changeViewToPlaces={this.props.displayPlaces}
              />
            ) : (
              <DropdownButton
                className="w-100"
                view="maps"
                dropdownOpen={this.state.dropdownOpen}
                toggle={this.toggle}
                getMapFilter={this.props.getMapFilter}
                currentFilter={this.props.map.filter}
              />
            )}
          </Col>
          <Col xs="2">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggleMap("1");
                  }}
                >
                  <i className="text-white far fa-list-alt" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggleMap("2");

                    this.props.getCoords(
                      this.props.isGeolocationEnabled
                        ? this.props.coords
                          ? [
                              this.props.coords.latitude,
                              this.props.coords.longitude
                            ]
                          : [48.861633, 2.332856]
                        : [48.861633, 2.332856]
                    );
                  }}
                >
                  <i className="text-white fas fa-map-marked-alt" />
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <div style={props}>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  {this.props.displayHomePage === "places" &&
                    (this.props.isGeolocationAvailable &&
                    this.props.isGeolocationEnabled &&
                    this.props.coords
                      ? this.props.places
                          .filter(
                            place =>
                              Math.abs(
                                place.latitude - this.props.coords.latitude
                              ) < 0.1 &&
                              Math.abs(
                                place.longitude - this.props.coords.longitude
                              ) < 0.1
                          )
                          .sort(
                            (a, b) =>
                              a.latitude - b.latitude &&
                              a.longitude - b.longitude
                          )
                          .map(place => (
                            <PlaceThumbnail {...place} key={place.id} />
                          ))
                      : this.props.places
                          .filter(place => place.country === "France")
                          .map(place => (
                            <PlaceThumbnail {...place} key={place.id} />
                          )))}
                  {this.props.displayHomePage === "activities" &&
                    this.props.activities
                      .sort((a, b) => a.date_diff - b.date_diff)
                      .map(activity =>
                        activity.capacity - 1 - activity.participants > 0 ? (
                          <ActivityThumbnail
                            {...activity}
                            profil={this.props.profile[0]}
                            key={activity.idActivity}
                          />
                        ) : (
                          ""
                        )
                      )}
                  <Row className="fixed-bottom listFooter">
                    <Link
                      to="/search"
                      className="w-50 listSearchBtn text-white text-center"
                    >
                      Rechercher <i className="fas fa-search-location" />
                    </Link>
                    <Link
                      to="/newplace"
                      onClick={() => this.props.getCoords([1, 1])}
                      className="w-50 listPostBtn text-white text-center"
                    >
                      <i className="fas fa-pencil-alt" /> Publier un lieu
                    </Link>
                  </Row>
                  <Row>
                    <Col
                      xs={{ size: 8, offset: 2 }}
                      className="homeUnderline mt-3 mb-4"
                    />
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  {this.state.activeTab === "2" ? (
                    <MapsContainer
                      isGeolocated={
                        this.props.isGeolocationEnabled && this.props.coords
                      }
                    />
                  ) : (
                    ""
                  )}
                </TabPane>
              </TabContent>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(HomePage);
