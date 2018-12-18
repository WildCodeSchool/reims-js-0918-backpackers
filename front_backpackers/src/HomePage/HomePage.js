import React, { Component } from "react";
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames"
import { Link } from "react-router-dom";
import axios from "axios";
import { geolocated } from 'react-geolocated'

import ActivityThumbnail from "./ActivityThumbnail";
import PlaceThumbnail from "./PlaceThumbnail";
import DropdownButton from "./DropdownButton";
import BurgerButton from "./BurgerButton";
import Sidebar from "./Sidebar";

import "./HomePage.scss";
import MapsContainer from "../containers/MapsContainer";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      view: "PLACES",
      dropdownOpen: false,
      collapsed: true,
      activeTab: '1'
    };
    this.changeViewToActivities = this.changeViewToActivities.bind(this);
    this.changeViewToPlaces = this.changeViewToPlaces.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaces();
    this.callApiPlaces();
    this.props.fetchActivities();
    this.callApiActivities()
    this.callApiProfile();
  }

  callApiProfile() {
    axios
      .get("/profile")
      .then(response => this.props.viewProfile(response.data));
  }

  callApiPlaces() {
    axios.get("/places").then(response => this.props.viewPlaces(response.data));
  }

  callApiActivities() {
    axios
      .get("/activities")
      .then(response => this.props.viewActivities(response.data));
  }

  changeViewToActivities() {
    this.setState({ view: "ACTIVITIES" });
  }

  callApiActivity(idActivity) {
    axios
      .get(`/activity/${idActivity}`)
      .then(response => this.props.viewActivity(response.data[0]))
  }

  changeViewToPlaces() {
    this.setState({ view: "PLACES" });
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
            <DropdownButton
              className="w-100"
              view={this.state.view}
              dropdownOpen={this.state.dropdownOpen}
              toggle={this.toggle}
              changeViewToActivities={this.changeViewToActivities}
              changeViewToPlaces={this.changeViewToPlaces}
            />
          </Col>
          <Col xs="2">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggleMap('1'); }}
                >
                  <i className="text-white far fa-list-alt"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => {
                    this.toggleMap('2');
                    this.props.getCoords([this.props.coords.latitude, this.props.coords.longitude]);
                  }}
                >
                  <i className="text-white fas fa-map-marked-alt"></i>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {this.state.view === "PLACES" &&
              this.props.places.map(place => (
                <PlaceThumbnail {...place} key={place.id} />
              ))}
            {this.state.view === "ACTIVITIES" &&
              this.props.activities.map(activity => (
                <ActivityThumbnail {...activity} viewActivity={() => this.callApiActivity(activity.idActivity)} key={activity.idActivity} />
              ))}

            <Row className="fixed-bottom listFooter">
              <Link
                to="/activities"
                className="w-50 listSearchBtn text-white text-center"
              >
                Rechercher <i className="fas fa-search-location" />
              </Link>
              <Link
                to="/activities"
                className="w-50 listPostBtn text-white text-center"
              >
                <i className="fas fa-pencil-alt" /> Publier{" "}
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
            {this.state.activeTab === "2" ? <MapsContainer /> : ""}
          </TabPane>
        </TabContent>


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
