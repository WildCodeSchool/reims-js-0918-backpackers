import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ActivityCaroussel = props => (
  <Fragment>
    {props.activity ? (
      <Fragment>
        {/* <UncontrolledCarousel
          items={[
            {
              src: `http://localhost:3010/images/${props.activity.pictureActivity
                ? props.activity.pictureActivity
                : props.activity.picturePlace}`, altText: props.activity.name
            }
          ]}
        /> */}

        <img src={`process.env.REACT_APP_API_URL/api/images/${props.activity.pictureActivity
          ? props.activity.pictureActivity
          : props.activity.picturePlace}`} alt={props.activity.name} className="singlePageImg" />

        <Row>
          <Col xs="6" className="creatorFrame">
            <Link to={`/profil/${props.activity.username}`}>
              <img
                className="rounded-circle"
                src={`process.env.REACT_APP_API_URL/api/images/${
                  props.activity.creator_picture
                    ? props.activity.creator_picture
                    : "default.png"
                }`}
                alt="Createur"
              />
              <p className="frame-name pl-3 pr-1 d-inline-block  bg-white ">
                {props.activity.username}
              </p>
            </Link>
            {/* <p className="d-inline-block text-white pr-1 pl-3">
            4.5
            <i className=" pl-1 fas fa-star" />
          </p> */}{" "}
            {/* Système de notation pas encore fait */}
          </Col>
        </Row>
      </Fragment>
    ) : (
      ""
    )}
  </Fragment>
);

export default ActivityCaroussel;
