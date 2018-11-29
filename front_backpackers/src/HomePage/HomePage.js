import React from "react";
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
      loading={loading}
      changeViewToActivities={changeViewToActivities}
      changeViewToPlaces={changeViewToPlaces}
    />
    {loading === true && view === "PLACES" ? (
      <Loading />
    ) : (
      view === "PLACES" &&
      listPlace.map(place => <PlaceThumbnail {...place} key={place.id} />)
    )}
    {loading === true ? (
      <Loading />
    ) : (
      view === "ACTIVITIES" &&
      listActivity.map(activity => (
        <ActivityThumbnail {...activity} key={activity.idActivity} />
      ))
    )}
  </div>
);

export default HomePage;
