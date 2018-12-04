import React, { Component, Fragment } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row
} from "reactstrap";
import "./FormPage.css";

class FormPage extends Component {
  render() {
    return (
      <Fragment>
        <Row className="header">
          <Col xs="2">
            <p className="price text-primary">
              <i className="fas fa-chevron-left" />
            </p>
          </Col>
          <Col xs="8">
            <p className="text-center">Publier une annonce</p>
          </Col>
        </Row>
        <h5>Votre annonce</h5>
        <Form className="mb-5">
          <FormGroup>
            <Label for="exampleSelect">Catégorie</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Titre</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Description</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Prix</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Photos</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>
          <Button>Publier l'annonce</Button>
        </Form>
      </Fragment>
    );
  }
}

export default FormPage;
