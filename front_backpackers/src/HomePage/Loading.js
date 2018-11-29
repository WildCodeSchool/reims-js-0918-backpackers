import React from "react";
import load from "../images/load.gif";

const Loading = ({ type, color }) => (
  <div className="loading">
    <img src={load} alt="load" />
  </div>
);

export default Loading;
