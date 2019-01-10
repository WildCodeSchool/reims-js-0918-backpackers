import React, { Component, Fragment } from "react";
import axios from "axios";

import Header from "./Header.js";
import ActivityDetails from "./ActivityDetails";
import ActivityCaroussel from "./ActivityCaroussel.js";

class ActivityPage extends Component {
  componentDidMount() {
    axios
      .get(`/activity/${this.props.match.params.id}`)
      .then(response => this.props.viewActivity(response.data[0]));
  }

  render() {
    return (
      <Fragment>
        {this.props.activity.name ? (
          <Fragment>
            <Header place={this.props.activity.city} />
            <ActivityCaroussel activity={this.props.activity} />
            <ActivityDetails activity={this.props.activity} />
          </Fragment>
        ) : (
            ""
          )}
      </Fragment>
    );
  }
}

export default ActivityPage;
