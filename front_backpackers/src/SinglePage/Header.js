import React from "react";
import { Row, Col } from "reactstrap";

const Header = () => (
  <div class="btn-group mt-2 my-2">
    <Row>
      <Col xs="12" />
      
      <div className="left">
        <p className="prix text-primary">
          <i class="fas fa-chevron-left"></i>
        </p>
      </div>
      <div className="description">
      <p class="text-primary">Rafting adulte</p>
     </div>
      <div className="share">
        <p className="prix text-primary">
          <i class="fas fas fa-share-square"></i>
        </p>
      </div>
      <div className="heart">
        <p className="prix text-primary">
          <i class="fas fa-heart"></i>
        </p>
      </div>
    </Row>
  </div>
);
export default Header;
