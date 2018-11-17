import React, { Fragment } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';
import logoBackpackers from "./images/Logo-Backpackers.png"

const Login = () => {
  return (
    <Fragment>
      <Row>
        <Col xs="6">
          <img source={require("./images/Logo-Backpackers.png")} alt="Logo Backpackers" />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Form>
            <FormGroup>
              <Input type="textarea" name="text" id="exampleText" placeholder="User Name" />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Button>Facebook</Button>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Button>Se connecter</Button>
        </Col>
      </Row>



    </Fragment>
  )
}

export default Login