import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";

const ActivityCaroussel = props => (
  <Fragment>
    {props.activity ? (
      <Fragment>
        {console.log(props)}
        {/* <UncontrolledCarousel
          items={[
            {
              src: `http://localhost:3010/images/${props.activity.pictureActivity
                ? props.activity.pictureActivity
                : props.activity.picturePlace}`, altText: props.activity.name
            }
          ]}
        /> */}

        <img src={`http://localhost:3010/images/${props.activity.pictureActivity
          ? props.activity.pictureActivity
          : props.activity.picturePlace}`} alt={props.activity.name} className="singlePageImg" />

        <Row>
          <Col xs="6" className="creatorFrame">
            <img
              className="rounded-circle"
              src={
                props.activity.picture
                  ? props.activity.picture
                  : "https://via.placeholder.com/75"
              }
              alt="Createur"
            />
            <p className="frame-name pl-3 pr-1 d-inline-block  bg-white ">
              {props.activity.username}
            </p>
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
