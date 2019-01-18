import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./SinglePage.scss";

const Header = props => (
  <Fragment>
    <Row className="blueHeader mb-2 fixed-top px-4">
      <Col xs="1">
        <Link to="/">
          <i className="fas fa-chevron-left text-white" />
        </Link>
      </Col>
      <Col xs="10">
        <p className="text-white text-center mb-0">{props.place}</p>
      </Col>
      <Col xs="1">
        {/* <p className="header-btn text-right text-primary pt-2 mb-0 d-flex justify-content-between">
          <i className="fas fas fa-share-square text-white px-2" />
          <i className="far fa-heart text-white" />
        </p> */}
      </Col>
    </Row>
  </Fragment>
);
export default Header;
