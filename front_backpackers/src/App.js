import React, { Component } from "react";
import { Container } from "reactstrap";
import ActivityPage from "./FormPage/ActivityPage";
import SinglePage from "./SinglePage/SinglePage";
import Login from "./Login";
import HomepageContainer from "./containers/HomepageContainer";
import ProfileContainer from "./containers/ProfileContainer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Login />
        <ProfileContainer />
        <HomepageContainer />
        <SinglePage />
        <ActivityPage />
      </Container>
    );
  }
}

export default App;
