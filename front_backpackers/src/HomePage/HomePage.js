import React from "react";
import "./HomePage.css";
import ActivitiesList from "./ActivitiesList";
import PlacesList from "./PlacesList";
import ButtonChangeView from "./ButtonChangeView";

const HomePage = ({
  view,
  toggleMethod,
  dropdownOpen,
  changeViewToActivities,
  changeViewToPlaces
}) => (
  <div className="homePage">
    <ButtonChangeView
      view={view}
      dropdownOpen={dropdownOpen}
      toggle={toggleMethod}
      changeViewToActivities={changeViewToActivities}
      changeViewToPlaces={changeViewToPlaces}
    />
    {view === "activities" && <ActivitiesList />}
    {view === "places" && <PlacesList />}
  </div>
);

export default HomePage;
