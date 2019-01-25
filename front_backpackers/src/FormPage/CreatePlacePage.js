import React, { Component } from "react";
import axios from "axios";
import PlaceFormContainer from "./PlaceForm";
import { geolocated } from "react-geolocated";
import { toast } from "react-toastify";
import PositionToast from "../Toast/Toastify";

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
      .post("/api/places", place, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => {
        if (response.status === 200) {
          console.log("ok", response.status);
          toast.success("Le lieu a bien été publié !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
        console.log("response", response);
        axios
          .post(`/api/places/upload/${response.data}`, formData, {
            headers: {
              "content-type": "multipart/form-data"
            }
          })
          .then(() => this.props.history.push(`/place/${response.data}`));
      });
  };

  onChange(e) {
    this.file = e.target.files[0];
  }

  render() {
    return (
      <div>
        <PlaceFormContainer
          uploadFile={this.onChange}
          onSubmit={this.submit}
          getAddress={this.props.getAddress}
          position={
            !this.props.isGeolocationAvailable ||
            !this.props.isGeolocationEnabled
              ? [48.861633, 2.332856]
              : this.props.coords
              ? [this.props.coords.latitude, this.props.coords.longitude]
              : [48.861633, 2.332856]
          }
        />
        <PositionToast />
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(CreatePlacePage);
