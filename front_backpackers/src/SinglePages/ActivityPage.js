import React, { Component, Fragment } from "react";
import axios from "axios";

import Header from "./Header.js";
import ActivityDetails from "./ActivityDetails";
import ActivityCaroussel from "./ActivityCaroussel.js";
import PositionToast from "../Toast/Toastify";

class ActivityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: []
    };
  }

  componentDidMount() {
    this.callApiProfile();
    this.callApiActivity();
  }

  callApiActivity() {
    axios
      .get(`/api/activity/${this.props.match.params.id}`)
      .then(response => this.props.viewActivity(response.data[0]));
  }

  callApiProfile() {
    axios
      .get("/api/profile", {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => this.props.viewProfile(response.data[0]));
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <Fragment>
          <PositionToast />
          {this.props.activity.name ? (
            <Fragment>
              <Header
                goBack={this.goBack}
                {...this.props.history}
                place={this.props.activity.city}
              />
              <ActivityCaroussel
                activity={this.props.activity}
                profile={this.props.profile}
              />
              <ActivityDetails
                callApiActivity={() => this.callApiActivity()}
                callApiProfile={() => this.callApiProfile()}
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
