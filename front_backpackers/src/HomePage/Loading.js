import React from "react";
import load from "../images/gif_backpackers_blanc.gif";

const Loading = ({ type, color }) => (
  <div className="loading">
    <img className="gif" src={load} alt="load" />
  </div>
);

export default Loading;
