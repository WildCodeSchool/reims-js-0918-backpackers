import React, { Component } from "react";
import axios from "axios";
import ActivityFormContainer from "./ActivityForm";

class ActivityPage extends Component {
  submit = activities => {
    const j = activities;
    JSON.stringify(j);
    axios
      .post("http://localhost:3010/activities", j)
      .then(response => console.log(response));
    console.log(typeof activities);
  };
  render() {
    return <ActivityFormContainer onSubmit={this.submit} />;
  }
}

export default ActivityPage;
