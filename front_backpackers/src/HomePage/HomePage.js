import React from "react";
import "./HomePage.css";
import ActivitiesList from "./ActivitiesList";
import PlacesList from "./PlacesList";
import DropdownButton from "./DropdownButton";

const HomePage = ({
  view,
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
    {view === "ACTIVITIES" && <ActivitiesList />}
    {view === "PLACES" && <PlacesList />}
  </div>
);

export default HomePage;
