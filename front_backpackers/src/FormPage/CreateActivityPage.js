import React, { Component } from "react";
import axios, { post } from "axios";
import ActivityFormContainer from "./ActivityForm";

class CreateActivityPage extends Component {
  constructor(props) {
    super(props);
    this.file = null;
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.file = e.target.files[0];
  }

  fileUpload(file) {
    const url = "/upload";
    const idActivity = this.props.id;
    const formData = new FormData();
    formData.append("monfichier", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, idActivity, config).then(res =>
      this.props.viewForm()
    );
  }

  submit = activities => {
    const activity = { ...activities, date: activities.date.split("T")[0], id_place: this.props.match.params.id };
    JSON.stringify(activity);
    const formData = new FormData();
    formData.append("monfichier", this.file);
    axios
      .post("/activities", activity, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => {
        // this.props.idCurrent(response.data);
        // this.props.viewUpload();
        axios
          .post("/activities/upload", formData, {
            headers: {
              "content-type": "multipart/form-data"
            }
          })
          .then(() => this.props.history.push(`/activity/${response.data}`))

      });
  };
  render() {
    return (
      <ActivityFormContainer uploadFile={this.onChange} onSubmit={this.submit} />
    );
  }
}

export default CreateActivityPage;
