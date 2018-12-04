import React, { Component, Fragment } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
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
            <Label for="category">Catégorie</Label>
            <Input type="select" name="select" id="Select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="Email">Titre</Label>
            <Input
              type="email"
              name="email"
              id="Email"
              placeholder="Titre de l'annonce"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Text">Description</Label>
            <Input type="textarea" name="text" id="Text" />
          </FormGroup>
          <FormGroup>
            <Label for="Email">Prix</Label>
            <Input
              type="email"
              name="email"
              id="Email"
              placeholder="Prix"
            />
          </FormGroup>
          <FormGroup>
            <Label for="photos">Photos</Label>
            <Input type="file" name="file" id="File" />
          </FormGroup>
          <Button>Publier l'annonce</Button>
        </Form>
      </Fragment>
    );
  }
}

export default FormPage;
