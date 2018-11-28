import React, { Component } from "react";
import Login from "./Login";
import HomePage from "./HomePage/HomePage";
import "./App.css";
import { Container } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "activities",
      dropdownOpen: false
    };
    this.changeViewToActivities = this.changeViewToActivities.bind(this);
    this.changeViewToPlaces = this.changeViewToPlaces.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  changeViewToActivities() {
    this.setState({ view: "activities" });
  }

  changeViewToPlaces() {
    this.setState({ view: "places" });
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
        />
      </Container>
    );
  }
}

export default App;
