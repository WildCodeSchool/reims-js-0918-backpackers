import React, { Component } from 'react';
import Login from './Login.js';
import './App.css';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Login />
      </Container>
    );
  }
}

export default App;
