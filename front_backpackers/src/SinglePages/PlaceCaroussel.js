import React, { Fragment } from "react";
// import { UncontrolledCarousel } from "reactstrap";

const PlaceCaroussel = props =>
  props.place ? (
    <Fragment>
      {/* <UncontrolledCarousel 
          items={[{ src: `http://localhost:3010/images/${props.place.picture}` }]}
        /> */}
      <img
        src={`http://localhost:3010/images/${props.place.picture}`}
        alt={props.place.name}
        className="singlePageImg"
      />
    </Fragment>
  ) : (
    ""
  );

export default PlaceCaroussel;
