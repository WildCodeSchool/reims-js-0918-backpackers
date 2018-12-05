import React, { Fragment } from "react";

import "./BurgerButton.css";

const BurgerButton = ({ drawerToggleClickHandler }) => (
  <Fragment>
    <button
      className="toggle-button"
      onClick={() => drawerToggleClickHandler()}
    >
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
    </button>
  </Fragment>
);

export default BurgerButton;
