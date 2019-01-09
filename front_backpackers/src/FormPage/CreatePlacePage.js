import React, { Component } from "react";
import axios from "axios";
import PlaceFormContainer from "./PlaceForm";
import { geolocated } from "react-geolocated"


class CreatePlacePage extends Component {

  submit = places => {
    const place = { ...places };
    console.log(place);
    JSON.stringify(place);
    axios
      .post("/places", place, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => {
        this.props.history.push("/upload");
      });
  };
  render() {
    return <PlaceFormContainer onSubmit={this.submit} position={!this.props.isGeolocationAvailable || !this.props.isGeolocationEnabled
      ? []
      : this.props.coords
        ? [this.props.coords.latitude, this.props.coords.longitude]
        : []} />

  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(CreatePlacePage);
