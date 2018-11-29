import React, { Component } from "react";
import SinglePage from "./SinglePage/SinglePage";
import Login from "./Login";
import HomePage from "./HomePage/HomePage";
import "./App.css";
import { Container } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "ACTIVITIES",
      dropdownOpen: false,
      placeList: [],
      activityList: []
    };
    this.changeViewToActivities = this.changeViewToActivities.bind(this);
    this.changeViewToPlaces = this.changeViewToPlaces.bind(this);
    this.toggle = this.toggle.bind(this);
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
      <Container fluid>
        <Login />
        <HomePage
          changeViewToActivities={this.changeViewToActivities}
          changeViewToPlaces={this.changeViewToPlaces}
          toggleMethod={this.toggle}
          dropdownOpen={this.state.dropdownOpen}
          view={this.state.view}
          listPlace={this.state.placeList}
          listActivity={this.state.activityList}
        />
        <SinglePage />
      </Container>
    );
  }
}

export default App;
