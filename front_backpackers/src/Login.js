import React from "react";
import { Row, Col, Button, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
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
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="loginUsername"
                id="loginUsername"
                placeholder="User Name"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="loginPassword"
                id="loginPassword"
                placeholder="password"
              />
            </FormGroup>
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
          <Link to="/" className="login d-block text-white text-center">
            Se connecter
          </Link>
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
};

export default Login;
