import React from "react";
import { Row, Col } from "reactstrap";

const Header = () => (
  <div>
    <Row>
      <Col xs="2">
        <p className="price text-primary">
          <i className="fas fa-chevron-left" />
        </p>
      </Col>
      <Col xs="8">
        <p className="text-primary text-center">Rafting adulte</p>
      </Col>
      <Col xs="2">
        <p className="price text-primary">
          <i className="fas fas fa-share-square px-2" />
          <i className="fas fa-heart" />
        </p>
      </Col>
    </Row>
  </div>
);
export default Header;
