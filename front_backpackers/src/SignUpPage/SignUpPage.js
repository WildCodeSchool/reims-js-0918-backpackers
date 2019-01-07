import React, { Component } from "react";
import axios from "axios";
import SignUpFormContainer from "./SignUpForm";

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
        this.props.history.push("/login");
      });
  };
  render() {
    return <SignUpFormContainer onSubmit={this.submit} />;
  }
}

export default SignUpPage;
