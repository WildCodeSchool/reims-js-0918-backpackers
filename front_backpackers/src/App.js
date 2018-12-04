import React, { Component } from "react";
import { Container } from "reactstrap";
import SinglePage from "./SinglePage/SinglePage";
import Login from "./Login";
import HomepageContainer from "./containers/HomepageContainer";
import "./App.css";

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
