import React, { Component } from "react";
import axios from "axios";
import ActivityFormContainer from "./ActivityForm";
import { toast } from "react-toastify";
import PositionToast from "../Toast/Toastify";

class CreateActivityPage extends Component {
  constructor(props) {
    super(props);
    this.file = null;
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.file = e.target.files[0];
  }

  submit = activities => {
    const activity = {
      ...activities,
      eventDate: activities.eventDate.split("T")[0],
      id_place: this.props.match.params.id
    };
    JSON.stringify(activity);
    console.log(activity);
    const formData = new FormData();
    formData.append("monfichier", this.file);
    axios
      .post("/api/activities", activity, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => {
        if (response.status === 200) {
          toast.success("Ton activité est prête !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
        axios.post(`/api/activities/upload/${response.data.insertId}`, formData, {
          headers: {
            "content-type": "multipart/form-data"
          }
        );
        axios.post(
          `/api/participate/${response.data.insertId}`,
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
      <div>
        <ActivityFormContainer
          uploadFile={this.onChange}
          onSubmit={this.submit}
        />
        <PositionToast />
      </div>
    );
  }
}

export default CreateActivityPage;
