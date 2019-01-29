import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col, Media, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Spring } from "react-spring";

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
  time_diff,
  viewActivity,
  date_diff,
  eventDate
}) => (
  <Spring
    from={{ opacity: 0, position: "relative", right: 100 }}
    to={{ opacity: 1, position: "relative", right: 0 }}
  >
    {props => (
      <div style={props}>
        <Row>
          <Col xs="12">
            <Media className="d-flex align-items-stretch">
              <Media left href="#">
                <Media
                  object
                  src={
                    pictureActivity
                      ? `http://178.170.56.29:5080/api/images/${pictureActivity}`
                      : `http://178.170.56.29:5080/api/images/${picturePlace}`
                  }
                  alt="picture of activity"
                  className="activityPicture"
                />
              </Media>
              <Media body className="d-flex flex-column">
                <Media
                  heading
                  className="mb-1 mx-1 d-flex justify-content-between"
                >
                  <span>
                    <i className="fas fa-location-arrow pr-1" />
                    {name}
                  </span>
                  <span>
                    <i className="fas fa-calendar pr-1" />
                    {date_diff < 0 ? (
                      <span>{eventDate.split("T")[0]}</span>
                    ) : date_diff > 0 ? (
                      <span
                        className={
                          "timeLeft" +
                          (date_diff <= 2
                            ? " text-danger"
                            : date_diff < 7
                            ? " text-warning"
                            : " text-success")
                        }
                        alt="picture of activity"
                        className="activityPicture"
                      >
                        {date_diff} jours restants
                      </span>
                    ) : (
                      <span
                        className={
                          "timeLeft" +
                          (time_diff.split(":")[0] * -1 <= 2
                            ? " text-danger"
                            : time_diff.split(":")[0] * -1 < 7
                            ? " text-warning"
                            : " text-success")
                        }
                      >
                        {time_diff.split(":")[0] * -1} heures restantes
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
      </div>
    )}
  </Spring>
);

ActivityThumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  price: PropTypes.number
};

export default ActivityThumbnail;
