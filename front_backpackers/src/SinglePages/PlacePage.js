import React, { Component, Fragment } from "react";
import axios from "axios";

import Header from "./Header.js";
import PlaceDetails from "./PlaceDetails.js";
import PlaceCaroussel from "./PlaceCaroussel";

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
            <PlaceCaroussel place={this.props.place} />
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
