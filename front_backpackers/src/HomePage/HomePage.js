import React, { Component } from "react";
import { Row, Button, Col } from "reactstrap";
import "./HomePage.css";
import ActivityThumbnail from "./ActivityThumbnail";
import PlaceThumbnail from "./PlaceThumbnail";
import DropdownButton from "./DropdownButton";
import Loading from "./Loading";
import axios from "axios";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      view: "PLACES",
      dropdownOpen: false,
      placeList: []
    };
    this.changeViewToActivities = this.changeViewToActivities.bind(this);
    this.changeViewToPlaces = this.changeViewToPlaces.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.callApiActivities();
    this.callApiPlaces();
  }

  callApiActivities() {
    axios
      .get("http://localhost:3010/activities")
      .then(response => this.setState({ activityList: response.data }))
      .then(
        setTimeout(() => {
          this.setState({
            loading: false
          });
        }, 3000)
      );
  }

  callApiPlaces() {
    axios
      .get("http://localhost:3010/places")
      .then(response => this.setState({ placeList: response.data }))
      .then(
        setTimeout(() => {
          this.setState({
            loading: false
          });
        }, 3000)
      );
  }

  changeViewToActivities() {
    this.setState({ view: "ACTIVITIES" });
  }

  changeViewToPlaces() {
    this.setState({ view: "PLACES" });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <div className="homePage">
        <DropdownButton
          view={this.state.view}
          dropdownOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          changeViewToActivities={this.changeViewToActivities}
          changeViewToPlaces={this.changeViewToPlaces}
        />
        {this.props.loading && this.state.view === "PLACES" ? (
          <Loading className="mt-2" />
        ) : (
          this.state.view === "PLACES" &&
          this.state.placeList.map(place => (
            <PlaceThumbnail {...place} key={place.id} />
          ))
        )}
        {this.state.view === "ACTIVITIES" &&
          this.props.activities.map(activity => (
            <ActivityThumbnail {...activity} key={activity.idActivity} />
          ))}

        <Row className="fixed-bottom listFooter">
          <Button className="w-50 listSearchBtn">
            Rechercher <i className="fas fa-search-location" />
          </Button>
          <Button className="w-50 listPostBtn">
            <i className="fas fa-pencil-alt" /> Publier{" "}
          </Button>
        </Row>
        <Row>
          <Col
            xs={{ size: 8, offset: 2 }}
            className="homeUnderline mt-3 mb-4"
          />
        </Row>
      </div>
    );
  }
}

export default HomePage;
