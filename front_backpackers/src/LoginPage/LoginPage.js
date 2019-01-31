import React, { Component } from "react";
import axios from "axios";
import LoginFormContainer from "./LoginForm";
import { toast } from "react-toastify";
import PositionToast from "../Toast/Toastify";

class LoginPage extends Component {
  submit = logs => {
    const log = logs;
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        mail: log.mail,
        password: log.password
      })
      .then(response => {
        localStorage.setItem("BackpackersToken", response.data.token);
        this.props.history.push("/");
        if (response.status === 200) {
          toast.success("Tu es en ligne !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      })
      .catch(errors => {
        if (errors.response.status === 400) {
          toast.error("Mauvais mot de passe ou adresse mail !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      });
  };
  render() {
    return (
      <div>
        <LoginFormContainer onSubmit={this.submit} />
        <PositionToast />
      </div>
    );
  }
}

export default LoginPage;
