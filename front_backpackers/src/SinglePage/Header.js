import React from "react";
import { Row, Col } from "reactstrap";

const Header = () => (
  <div>
    <Row>
      <Col xs="2">
        <p className="price text-primary">
          <i class="fas fa-chevron-left" />
        </p>
      </Col>
      <Col xs="8">
        <p class="text-primary text-center">Rafting adulte</p>
      </Col>
      <Col xs="2">
        <p className="price text-primary">
          <i class="fas fas fa-share-square px-2" />
          <i class="fas fa-heart" />
        </p>
      </Col>
    </Row>
  </div>
);
export default Header;
