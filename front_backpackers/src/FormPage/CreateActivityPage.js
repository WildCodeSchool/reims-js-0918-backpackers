import React, { Component } from "react";
import { Button } from "reactstrap";
import axios, { post } from "axios";
import ActivityFormContainer from "./ActivityForm";

class CreateActivityPage extends Component {
  constructor(props) {
    super(props);
    this.file = null;
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit

    this.fileUpload(this.file).then(res => {
      this.props.history.push("/");
    });
  }
  onChange(e) {
    this.file = e.target.files[0];
  }

  fileUpload(file) {
    const url = "/upload";
    const idActivity = this.props.idCurrent;
    const formData = new FormData();
    formData.append("monfichier", file);
    const data = { formData, idActivity };
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, data, config);
  }

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
        this.props.viewForm();
        this.props.history.push("/upload");
      });
  };
  render() {
    return (
      <div>
        {this.props.viewForm ? (
          <ActivityFormContainer onSubmit={this.submit} />
        ) : (
          <form onSubmit={e => this.onFormSubmit(e)}>
            <h3>File Upload</h3>
            <input type="file" onChange={this.onChange} />
            <Button type="submit">Upload</Button>
          </form>
        )}
      </div>
    );
  }
}

export default CreateActivityPage;
