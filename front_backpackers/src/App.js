import React, { Component } from "react";
import Login from "./Login";
import HomePage from "./HomePage/HomePage";
import "./App.css";
import { Container, Button } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "activities"
    };
    this.changeViewToActivities = this.changeViewToActivities.bind(this);
    this.changeViewToPlaces = this.changeViewToPlaces.bind(this);
  }

  changeViewToActivities() {
    this.setState({ view: "activities" });
  }

  changeViewToPlaces() {
    this.setState({ view: "places" });
  }

  render() {
    return (
      <Container fluid>
        <Login />

        <HomePage
          changeViewToActivities={this.changeViewToActivities}
          changeViewToPlaces={this.changeViewToPlaces}
          view={this.state.view}
        />
      </Container>
    );
  }
}

export default App;
