import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Input } from "reactstrap";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      mail: "",
      password: ""
    };
    this.enterMail = this.enterMail.bind(this);
    this.enterPassword = this.enterPassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  enterMail(event) {
    this.setState({ mail: event.target.value });
  }

  enterPassword(event) {
    this.setState({ password: event.target.value });
  }

  handleClick() {
    axios
      .post("/auth/login", {
        mail: this.state.mail,
        password: this.state.password
      })
      .then(response => localStorage.setItem("token", response.data.token))
      .then(error => console.log(error));
  }

  render() {
    return (
      <div className="loginBackground">
        <Row>
          <Col xs="12">
            <h1 className="text-center my-3">Se connecter</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 6, offset: 3 }}>
            <img
              className="w-100 my-4"
              src={require("./images/Logo-Backpackers.png")}
              alt="Logo Backpackers"
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Form onSubmit={() => this.handleClick()}>
              <FormGroup>
                <Input
                  type="text"
                  name="loginUsername"
                  id="loginUsername"
                  placeholder="User Name"
                  onChange={event => this.enterMail(event)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="loginPassword"
                  id="loginPassword"
                  placeholder="password"
                  onChange={event => this.enterPassword(event)}
                />
              </FormGroup>
              <Button className="login d-block text-white text-center">
                Se connecter
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 8, offset: 2 }}>
            <Button className="facebookLogin">Facebook</Button>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="newAccount mt-4 text-center">
              Je n'ai pas de compte.<a href="/">Créer un compte</a>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
