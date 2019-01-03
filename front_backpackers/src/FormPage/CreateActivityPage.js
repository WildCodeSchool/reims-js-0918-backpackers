import React, { Component } from "react";
import axios from "axios";
import ActivityFormContainer from "./ActivityForm";

class CreateActivityPage extends Component {
  submit = activities => {
    const activity = { ...activities, id_place: this.props.match.params.id };
    console.log(activity)
    JSON.stringify(activity);
    console.log("Bearer " + localStorage.getItem('token'))
    axios
      .post("http://localhost:3010/activities", activity, { headers: { "Authorization": "Bearer " + localStorage.getItem('token') } }).then(response => {
        this.props.history.push("/");
      });
  };
  render() {
    return <ActivityFormContainer onSubmit={this.submit} />;
  }
}

export default CreateActivityPage;
