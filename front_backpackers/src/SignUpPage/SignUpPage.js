import React, { Component } from "react";
import axios from "axios";
import SignUpFormContainer from "./SignUpForm";
import { toast } from "react-toastify";

class SignUpPage extends Component {
  submit = users => {
    const user = users;
    JSON.stringify(user);
    axios
      .post("/auth/signup", user, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
      .then(response => {
        if (response.status === 200) {
          toast.success("Tu es maintenant inscrit ! connecte toi !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
        this.props.history.push("/login");
      });
  };
  render() {
    return (
      <div>
        <SignUpFormContainer onSubmit={this.submit} />;
      </div>
    );
  }
}

export default SignUpPage;
