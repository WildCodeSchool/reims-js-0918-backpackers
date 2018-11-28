import React, { Component } from "react";
import SinglePage from "./SinglePage/SinglePage";
import Login from "./Login";
import HomePage from "./HomePage";
import "./App.css";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Login />

        {/* <HomePage /> */}
        <SinglePage />
      </Container>
    );
  }
}

export default App;
