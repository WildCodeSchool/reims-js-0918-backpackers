import React from "react";
import { Row, Col } from "reactstrap";

const Header = () => (
  <div class="btn-group mt-2 my-2">
    <Row>
      <Col xs="12" />
      
      <div className="Left">
        <p className="prix text-primary">
          <i class="fas fa-chevron-left"></i>
        </p>
      </div>
      <div className="Description">
      <p class="text-primary">Rafting adulte</p>
     </div>
      <div className="Share">
        <p className="prix text-primary">
          <i class="fas fas fa-share-square"></i>
        </p>
      </div>
      <div className="Coeur">
        <p className="prix text-primary">
          <i class="fas fa-heart"></i>
        </p>
      </div>
    </Row>
  </div>
);
export default Header;
