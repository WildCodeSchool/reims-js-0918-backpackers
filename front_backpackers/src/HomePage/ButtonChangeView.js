import React from "react";
import { Button, Col, Row } from "reactstrap";

const ButtonChangeView = ({ changeViewToActivities, changeViewToPlaces }) => (
  <div>
    <Row>
      <Col xs={{ size: 2, offset: 2 }}>
        <Button
          className="buttonView mb-2"
          onClick={() => changeViewToActivities()}
        >
          Activités
        </Button>
      </Col>
      <Col xs={{ size: 2, offset: 2 }}>
        <Button
          className="buttonView mb-2"
          onClick={() => changeViewToPlaces()}
        >
          Lieux
        </Button>
      </Col>
    </Row>
  </div>
);

export default ButtonChangeView;
