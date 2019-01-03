import React, { Fragment } from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";

const items = [
  {
    src:
      "https://guidapp.s3.eu-central-1.amazonaws.com/activity_base/pyrenerafting.com/initiation-au-rafting-gorges-de-saint-georges-aude.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header"
  },
  {
    src:
      "https://guidapp.s3.eu-central-1.amazonaws.com/activity_base/tom-rafting-cauterets.fr/descente-en-rafting-de-la-noguera-pallaresa-lourdes.JPG",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header"
  },
  {
    src:
      "http://www.buenavistarafting.com/img/theme/fiches-techniques/rafting/decouverte/thumbs/ADECOUVERTE4_800x800-crop=0.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header"
  }
];

const Caroussel = (props) => (
  <Fragment>
    <UncontrolledCarousel items={items} />
    {props.activity ?
      <Row>
        <Col xs="6" className="creatorFrame">
          <img className="rounded-circle" src="https://via.placeholder.com/75" alt="Createur" />
          <p className="frame-name pl-3 pr-1 d-inline-block  bg-white ">Paul.P</p>
          <p className="d-inline-block text-white pr-1 pl-3">4.5<i className=" pl-1 fas fa-star"></i></p>
        </Col>
      </Row>
      : ""}
  </Fragment>
);

export default Caroussel;
