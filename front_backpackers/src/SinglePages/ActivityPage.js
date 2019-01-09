import React, { Component, Fragment } from "react";
import axios from "axios";

import Header from "./Header.js";
import Caroussel from "./Caroussel";
import ActivityDetailsContainer from "../containers/ActivityDetailsContainer";

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
            <Caroussel activity={this.props.activity} />
            <ActivityDetailsContainer activity={this.props.activity} />
          </Fragment>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default ActivityPage;
