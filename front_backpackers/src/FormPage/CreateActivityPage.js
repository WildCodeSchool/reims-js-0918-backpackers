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
    const activity = {
      ...activities,
      date: activities.date.split("T")[0],
      id_place: this.props.match.params.id
    };
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
        console.log(response.data);
        axios.post(`/activities/upload/${response.data.insertId}`, formData, {
          headers: {
            "content-type": "multipart/form-data"
          }
        });
        axios.post(
          `/participate/${response.data.insertId}`,
          { idChat: response.data.id },
          {
            headers: {
              accept: "application/json",
              authorization:
                "Bearer " + localStorage.getItem("BackpackersToken")
            }
          }
        );
        this.props.history.push(`/activity/${response.data.insertId}`);
      });
  };
  render() {
    return (
      <ActivityFormContainer
        uploadFile={this.onChange}
        onSubmit={this.submit}
      />
    );
  }
}

export default CreateActivityPage;
