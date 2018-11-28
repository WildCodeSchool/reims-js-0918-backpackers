import React from "react";
import "./HomePage.css";
import ActivityThumbnail from "./ActivityThumbnail";
import PlaceThumbnail from "./PlaceThumbnail";
import DropdownButton from "./DropdownButton";

const HomePage = ({
  view,
  listActivity,
  listPlace,
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
    {view === "PLACES" &&
      listPlace.map(place => <PlaceThumbnail {...place} key={place.id} />)}
    {view === "ACTIVITIES" &&
      listActivity.map(activity => (
        <ActivityThumbnail {...activity} key={activity.id} />
      ))}
  </div>
);

export default HomePage;
