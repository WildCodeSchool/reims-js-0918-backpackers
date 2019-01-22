import React, { Component } from "react";
import { ToastContainer } from "react-toastify";

class Position extends Component {
  render() {
    return (
      <div>
        <ToastContainer autoClose={9000} draggablePercent={60} />
      </div>
    );
  }
}

export default Position;
