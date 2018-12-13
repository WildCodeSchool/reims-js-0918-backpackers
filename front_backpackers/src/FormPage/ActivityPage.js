import React, { Component } from "react";
import axios from "axios";
import ActivityFormContainer from "./ActivityForm";

class ActivityPage extends Component {
  submit = activities => {
    const activity = activities;
    console.log(activity);
    JSON.stringify(activity);
    axios.post("/activities", activity).then(response => {
      this.props.history.push("/");
    });
  };
  render() {
    return <ActivityFormContainer onSubmit={this.submit} />;
  }
}

export default ActivityPage;
