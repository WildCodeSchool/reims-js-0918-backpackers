import React, { Component, Fragment } from "react";
import axios from "axios"

import Header from "./Header.js";
import Caroussel from "./Caroussel";
import ActivityDetails from "./ActivityDetails";

class ActivityPage extends Component {

  componentDidMount() {
    axios
      .get(`/activity/${this.props.match.params.id}`)
      .then(response => this.props.viewActivity(response.data[0]))
  }

  render() {
    return (
      <Fragment>
        {this.props.activity.name ?
          <Fragment>
            <Header place={this.props.activity.city} />
            <Caroussel activity={this.props.activity} />
            <ActivityDetails activity={this.props.activity} />
          </Fragment>
          : ""
        }
      </Fragment>
    )
  }

}

export default ActivityPage;
