import React, { Component } from "react";
import axios from "axios";
import LoginFormContainer from "./LoginForm";

class LoginPage extends Component {
  submit = logs => {
    const log = logs;
    axios
      .post("/auth/login", { mail: log.mail, password: log.password })
      .then(response => {
        localStorage.setItem("BackpackersToken", response.data.token);
        this.props.history.push("/");
      })
      .catch(results => console.error(results));
  };
  render() {
    return <LoginFormContainer onSubmit={this.submit} />;
  }
}

export default LoginPage;
