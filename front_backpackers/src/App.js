import React, { Component } from 'react';
import Login from './Login.js';
import SinglePage from './SinglePage/SinglePage';
import './App.css';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Login />
        <SinglePage />
      </Container>
    );
  }
}

export default App;
