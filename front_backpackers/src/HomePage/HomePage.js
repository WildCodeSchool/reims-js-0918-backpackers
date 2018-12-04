import React, { Component } from "react";
import { Row, Button, Col } from "reactstrap";
import axios from "axios";
import "./HomePage.css";
import ActivityThumbnail from "./ActivityThumbnail";
import PlaceThumbnail from "./PlaceThumbnail";
import DropdownButton from "./DropdownButton";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      view: "PLACES",
      dropdownOpen: false
    };
    this.changeViewToActivities = this.changeViewToActivities.bind(this);
    this.changeViewToPlaces = this.changeViewToPlaces.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaces();
    this.callApiPlaces();
    this.props.fetchActivities();
    this.callApiActivities();
  }

  callApiPlaces() {
    axios
      .get("http://localhost:3010/places")
      .then(response => this.props.viewPlaces(response.data));
  }

  callApiActivities() {
    axios
      .get("http://localhost:3010/activities")
      .then(response => this.props.viewActivities(response.data));
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
        <Row className="homePage_Header">
          <Col xs="2" />
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
          <Col xs="2" />
        </Row>
        {this.state.view === "PLACES" &&
          this.props.places.map(place => (
            <PlaceThumbnail {...place} key={place.id} />
          ))}
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
