import React from "react";
import { Row, Col } from "reactstrap";

const Details = () => (
  <header>
    <div className="text-center">
      <h1 className="text-primary mt-1">Rafting à Athènes</h1>
      <Row>
        <Col xs="12" />
        <div className="Prix">
          <p className="prix text-primary"><i className="fas fa-euro-sign"></i></p>
        </div>
        <div className="Activite">
          <p className="text-primary">Activité aquatique</p>
        </div>
        <div className="Placerestante">
          <p className="text-primary"><i class="fas fa-user-alt"></i></p>
        </div>
      </Row>
    </div>
  </header>
);
export default Details;
