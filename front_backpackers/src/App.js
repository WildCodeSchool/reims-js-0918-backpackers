import React, { Component } from "react";
import SinglePage from "./SinglePage/SinglePage";
import Login from "./Login";
import HomepageContainer from "./containers/HomepageContainer";
import "./App.css";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Login />
        <HomepageContainer />
        <SinglePage />
      </Container>
    );
  }
}

export default App;
