import React from "react";
import { Button, Col, Row } from "reactstrap";
import "./HomePage.css";

const ButtonChangeView = ({ changeViewToActivities, changeViewToPlaces }) => (
  <div>
    <Row>
      <Col xs={{ size: 2, offset: 2 }}>
        <Button className="buttonView" onClick={() => changeViewToActivities()}>
          Activités
        </Button>
      </Col>
      <Col xs={{ size: 1 }}>
        <div className="homeLine" />
      </Col>
      <Col xs={{ size: 2, offset: 1 }}>
        <Button className="buttonView" onClick={() => changeViewToPlaces()}>
          Lieux
        </Button>
      </Col>
    </Row>
  </div>
);

export default ButtonChangeView;
