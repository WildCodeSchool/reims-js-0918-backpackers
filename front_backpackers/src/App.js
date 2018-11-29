import React, { Component } from "react";
import SinglePage from "./SinglePage/SinglePage";
import Login from "./Login";
import HomePage from "./HomePage/HomePage";
import "./App.css";
import { Container } from "reactstrap";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "ACTIVITIES",
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
    this.loading();
  }

  loading() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 5000);
  }

  callApiActivities() {
    const activities = [];
    axios
      .get("http://localhost:3010/activities")
      .then(response => response.data.map(index => activities.push(index)));
    this.setState({ activityList: activities });
  }

  callApiPlaces() {
    const places = [];
    axios
      .get("http://localhost:3010/places")
      .then(response => response.data.map(index => places.push(index)));
    this.setState({ placeList: places });
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
        <SinglePage />
      </Container>
    );
  }
}

export default App;
