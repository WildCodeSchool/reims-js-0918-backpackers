import React from "react";
import { Row, Col } from "reactstrap";

const Details = () => (
 
    <div className="text-center">
      <h1 className="text-primary mt-1">Rafting in Athènes</h1>
      <Row>
        <Col xs="4" >
        <div className="price">
          <p className="prix text-primary"><i className="fas fa-euro-sign"></i></p>
        </div>
        </Col>
        <Col xs="4">
        <div className="activity">
          <p className="text-primary">To activate aquatics</p>
        </div>
        </Col>
        <Col xs="4">
        <div className="remainingPlace">
          <p className="text-primary"><i class="fas fa-user-alt"></i></p>
        </div>
        </Col>
      </Row>
    </div>

);
export default Details;
