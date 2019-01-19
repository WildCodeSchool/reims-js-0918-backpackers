import React, { Component } from "react";
import axios from "axios";
import PlaceFormContainer from "./PlaceForm";
import { geolocated } from "react-geolocated"


class CreatePlacePage extends Component {
  constructor(props) {
    super(props);
    this.file = null;
    this.onChange = this.onChange.bind(this);
  }


  submit = places => {
    const place = { ...places, ...this.props.selectAddress };
    JSON.stringify(place);
    const formData = new FormData();
    formData.append("monfichier", this.file);
    axios
      .post("/places", place, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => {
        axios
          .post("/places/upload", formData, {
            headers: {
              "content-type": "multipart/form-data"
            }
          })
          .then(() => this.props.history.push(`/place/${response.data}`))

      });
  };

  onChange(e) {
    this.file = e.target.files[0];
  }

  render() {

    return (
      <PlaceFormContainer uploadFile={this.onChange} onSubmit={this.submit} getAddress={this.props.getAddress}
        position={!this.props.isGeolocationAvailable || !this.props.isGeolocationEnabled
          ? []
          : this.props.coords
            ? [this.props.coords.latitude, this.props.coords.longitude]
            : []}
      />
    )

  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(CreatePlacePage);
