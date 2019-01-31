import React, { Component, Fragment } from "react";
import axios from "axios";

import Header from "./Header.js";
import PlaceDetails from "./PlaceDetails.js";
import PlaceCaroussel from "./PlaceCaroussel";
import { Spring } from "react-spring";

import PositionToast from "../Toast/Toastify";

class PlacePage extends Component {
  componentDidMount() {
    axios
      .get(`process.env.REACT_APP_API_URL/api/place/${this.props.match.params.id}`)
      .then(response =>
        this.props.viewPlace({
          ...response.data[0],
          activities: response.data.activities
        })
      )
      .then(() => window.scrollTo(0, 0));
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <Fragment>
        <PositionToast />
        {this.props.place.name ? (
          <Fragment>
            <Header
              goBack={this.goBack}
              {...this.props.history}
              place={this.props.place.name}
            />
            <Spring
              from={{ opacity: 0, position: "relative", right: 100 }}
              to={{ opacity: 1, position: "relative", right: 0 }}
            >
              {props => (
                <div style={props}>
                  <PlaceCaroussel place={this.props.place} />
                  <PlaceDetails place={this.props.place} />
                </div>
              )}
            </Spring>
          </Fragment>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default PlacePage;
