import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col, Media, Button } from "reactstrap";
import { Link } from "react-router-dom";

const ActivityThumbnail = ({
  idActivity,
  city,
  name,
  id_creator,
  descriptionActivity,
  descriptionPlace,
  pictureActivity,
  picturePlace,
  price,
  profil,
  viewActivity,
  date_diff,
  eventDate
}) => (
  <Row>
    <Col xs="12">
      <Media className="d-flex align-items-stretch">
        <Media left href="#">
          <Media
            object
            src={
              pictureActivity
                ? `http://localhost:3010/api/images/${pictureActivity}`
                : `http://localhost:3010/api/images/${picturePlace}`
            }
            alt="picture of activity"
            className="activityPicture"
          />
        </Media>
        <Media body className="d-flex flex-column">
          <Media heading className="mb-1 mx-1 d-flex justify-content-between">
            <span>
              <i className="fas fa-location-arrow pr-1" />
              {name}
            </span>
            <span>
              <i className="fas fa-calendar pr-1" />
              {date_diff < 0 ? (
                <span>{eventDate.split("T")[0]}</span>
              ) : (
                <span
                  className={
                    "timeLeft" +
                    (date_diff <= 2
                      ? " text-danger"
                      : date_diff < 7
                      ? " text-warning"
                      : " text-success")
                  }
                >
                  {date_diff} jours restants
                </span>
              )}
            </span>
          </Media>
          {descriptionActivity ? descriptionActivity : descriptionPlace}
          <div className="d-flex align-items-end justify-content-between mt-auto">
            <Link to={`/activity/${idActivity}`}>
              <Button onClick={viewActivity} className="seeItem">
                Voir
              </Button>
            </Link>
            <span className="itemListPrice pr-2">
              {price ? (
                <Fragment>
                  {price}€ /
                  <i className="far fa-user" />
                </Fragment>
              ) : (
                "Gratuit"
              )}
            </span>
          </div>
        </Media>
      </Media>
    </Col>
  </Row>
);

ActivityThumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  price: PropTypes.number
};

export default ActivityThumbnail;
