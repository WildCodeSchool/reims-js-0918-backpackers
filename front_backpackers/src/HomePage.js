import React from "react";
import { Row, Col, Media, Button } from "reactstrap";
import "./HomePage.css";
import PlaceThumbnail from "./PlaceThumbnail";
import ActivityThumbnail from "./ActivityThumbnail";

const HomePage = ({ listPlace, listActivity }) => {
  return (
    <div className="homePage">
      <Row>
        <Col xs="12">
          {listPlace.map(place => (
            <PlaceThumbnail {...place} key={place.id} />
          ))}
          {listActivity.map(activity => (
            <ActivityThumbnail {...activity} key={activity.id} />
          ))}
        </Col>
      </Row>

      <Row className="fixed-bottom listFooter">
        <Button className="w-50 listSearchBtn">
          Rechercher <i className="fas fa-search-location" />
        </Button>
        <Button className="w-50 listPostBtn">
          <i className="fas fa-pencil-alt" /> Publier{" "}
        </Button>
      </Row>

      <Row>
        <Col xs={{ size: 8, offset: 2 }} className="homeUnderline mt-3 mb-4" />
      </Row>
    </div>
  );
};

export default HomePage;
