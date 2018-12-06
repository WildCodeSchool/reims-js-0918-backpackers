import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Media, Button } from "reactstrap";

const ActivityThumbnail = ({
  city,
  name,
  descriptionActivity,
  descriptionPlace,
  pictureActivity,
  picturePlace,
  price
}) => (
  <Row>
    <Col xs="12">
      <Media className="d-flex align-items-stretch">
        <Media left href="#">
          <Media
            object
            src={pictureActivity ? pictureActivity : picturePlace}
            alt="picture of activity"
            className="activityPicture"
          />
        </Media>
        <Media body className="d-flex flex-column">
          <Media heading className="mb-1 mx-1 d-flex justify-content-between">
            <span>
              <i className="fas fa-location-arrow pr-1" />
              {city}
            </span>
            <span>
              <i className="fas fa-calendar pr-1" />
              {name}
            </span>
          </Media>
          {descriptionActivity ? descriptionActivity : descriptionPlace}
          <div className="d-flex align-items-end justify-content-between mt-auto">
            <Button className="seeItem">Voir</Button>
            <span className="itemListPrice pr-2">
              {price}€ /
              <i className="far fa-user" />
            </span>
          </div>
        </Media>
      </Media>
    </Col>
  </Row>
);

ActivityThumbnail.propTypes = {
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number
};

export default ActivityThumbnail;
