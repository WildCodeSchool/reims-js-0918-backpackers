import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class PositionToast extends Component {
  render() {
    return (
      <div>
        <ToastContainer autoClose={3000} draggablePercent={60} />
      </div>
    );
  }
}

export default PositionToast;
