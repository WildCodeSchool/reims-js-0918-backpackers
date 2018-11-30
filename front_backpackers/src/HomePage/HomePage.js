import React from "react";
import { Row, Button, Col } from "reactstrap";
import "./HomePage.css";
import ActivityThumbnail from "./ActivityThumbnail";
import PlaceThumbnail from "./PlaceThumbnail";
import DropdownButton from "./DropdownButton";
import Loading from "./Loading";

const HomePage = ({
  view,
  listActivity,
  listPlace,
  loading,
  toggleMethod,
  dropdownOpen,
  changeViewToActivities,
  changeViewToPlaces
}) => (
  <div className="homePage">
    <DropdownButton
      view={view}
      dropdownOpen={dropdownOpen}
      toggle={toggleMethod}
      changeViewToActivities={changeViewToActivities}
      changeViewToPlaces={changeViewToPlaces}
    />
    {loading === true && view === "PLACES" ? (
      <Loading className="mt-2" />
    ) : (
      view === "PLACES" &&
      listPlace.map(place => <PlaceThumbnail {...place} key={place.id} />)
    )}
    {loading === true && view === "ACTIVITIES" ? (
      <Loading className="mt-2" />
    ) : (
      view === "ACTIVITIES" &&
      listActivity.map(activity => (
        <ActivityThumbnail {...activity} key={activity.idActivity} />
      ))
    )}

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

export default HomePage;
