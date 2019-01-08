import React, { Component } from "react";
import axios from "axios";
import ActivityFormContainer from "./ActivityForm";

class CreateActivityPage extends Component {
  submit = activities => {
    const activity = { ...activities, id_place: this.props.match.params.id };
    console.log(activity);
    JSON.stringify(activity);
    axios
      .post("http://localhost:3010/activities", activity, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => {
        this.props.idCurrent(response.data);
        this.props.history.push("/upload");
      });
  };
  render() {
    return <ActivityFormContainer onSubmit={this.submit} />;
  }
}

export default CreateActivityPage;
