import React, { Component } from "react";
import SinglePage from "./SinglePage/SinglePage";
import Login from "./Login";
import HomePage from "./HomePage/HomePage";
import "./App.css";
import { Container } from "reactstrap";
import axios from "axios";
import Maps from "./Maps";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "PLACES",
      dropdownOpen: false,
      placeList: [],
      activityList: [],
      loading: true
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
      <Container fluid>
        <Login />
        <HomePage
          changeViewToActivities={this.changeViewToActivities}
          changeViewToPlaces={this.changeViewToPlaces}
          toggleMethod={this.toggle}
          dropdownOpen={this.state.dropdownOpen}
          view={this.state.view}
          loading={this.state.loading}
          listPlace={this.state.placeList}
          listActivity={this.state.activityList}
        />
        <Maps />
        <SinglePage />
      </Container>
    );
  }
}

export default App;
