import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import "./SearchPage.css";

class SearchActivity extends Component {
  render() {
    return (
      <Fragment>
        <Row className="search-header">
          <Col xs="2">
            <Link to="/" className="price text-primary">
              <i className="fas fa-chevron-left text-white" />
            </Link>
          </Col>
          <Col xs="8">
            <p className="text-center mb-0">Rechercher</p>
          </Col>
        </Row>
        <Row>
          <InputGroup>
            <Input className="search-bar" placeholder="Rechercher" />
            <Button className="search-btn">Rechercher</Button>
          </InputGroup>
        </Row>
        <Row>
          <Col>
            <p className="pr-3">Catégories</p>
            <div className="activitiesTitleUnderline mb-3 w-100" />
          </Col>
        </Row>
        <Row>
          <Col />
          <Col />
          <Col />
        </Row>
      </Fragment>
    );
  }
}

export default SearchActivity;
