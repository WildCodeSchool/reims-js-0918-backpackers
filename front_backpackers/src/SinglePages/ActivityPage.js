import React, { Component, Fragment } from "react";
import axios from "axios";

import Header from "./Header.js";
import ActivityDetails from "./ActivityDetails";
import ActivityCaroussel from "./ActivityCaroussel.js";
import { Spring } from "react-spring";
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
    window.scrollTo(0, 0);
  }

  callApiActivity() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/activity/${
          this.props.match.params.id
        }`
      )
      .then(response => this.props.viewActivity(response.data[0]));
  }

  callApiProfile() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/profile`, {
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
      <Fragment>
        <PositionToast />
        {this.props.activity.name ? (
          <Fragment>
            <Header
              goBack={this.goBack}
              {...this.props.history}
              place={this.props.activity.city}
            />

            <Spring
              from={{ opacity: 0, position: "relative", left: 100 }}
              to={{ opacity: 1, position: "relative", left: 0 }}
            >
              {props => (
                <div style={props}>
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

export default ActivityPage;
