import React, { Component } from "react";
import axios from "axios";
import ActivityFormContainer from "./ActivityForm";

class ActivityPage extends Component {
  submit = activities => {
    const activity = activities;
    JSON.stringify(activity);
    axios
      .post("http://localhost:3010/activities", activity)
      .then(response => console.log(response));
    console.log(typeof activities);
  };
  render() {
    return <ActivityFormContainer onSubmit={this.submit} />;
  }
}

export default ActivityPage;
