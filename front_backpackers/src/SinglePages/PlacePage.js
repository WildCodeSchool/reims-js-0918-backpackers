import React, { Component, Fragment } from "react";
import axios from "axios";

import Header from "./Header.js";
import Caroussel from "./Caroussel";
import PlaceDetails from "./PlaceDetails.js";

class PlacePage extends Component {
  componentDidMount() {
    axios.get(`/place/${this.props.match.params.id}`).then(response =>
      this.props.viewPlace({
        ...response.data[0],
        activities: response.data.activities
      })
    );
  }

  render() {
    return (
      <Fragment>
        {this.props.place.name ? (
          <Fragment>
            <Header place={this.props.place.name} />
            <Caroussel place={this.props.place} />
            <PlaceDetails place={this.props.place} />
          </Fragment>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default PlacePage;
