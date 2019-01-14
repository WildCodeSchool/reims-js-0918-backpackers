import React, { Component, Fragment } from "react";
import axios from "axios";

import Header from "./Header.js";
import Caroussel from "./Caroussel";
import ActivityDetails from "./ActivityDetails";

class ActivityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: []
    };
  }

  componentDidMount() {
    this.callApiActivity();
    this.callApiProfile();
  }

  callApiActivity() {
    axios
      .get(`/activity/${this.props.match.params.id}`)
      .then(response => this.props.viewActivity(response.data[0]));
  }

  callApiProfile() {
    axios
      .get("/profile", {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => this.props.viewProfile(response.data[0]));
  }

  render() {
    return (
      <div>
        <Fragment>
          {this.props.activity.name ? (
            <Fragment>
              <Header place={this.props.activity.city} />
              <Caroussel activity={this.props.activity} />
              <ActivityDetails
                activity={this.props.activity}
                profile={this.props.profile.id}
              />
            </Fragment>
          ) : (
            ""
          )}
        </Fragment>
      </div>
    );
  }
}

export default ActivityPage;
