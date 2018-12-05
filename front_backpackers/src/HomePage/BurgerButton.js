import React, { Fragment } from "react";

import "./BurgerButton.css";

const BurgerButton = ({ drawerToggleClickHandler }) => (
  <Fragment>
    <button
      className="toggle-button"
      onClick={() => drawerToggleClickHandler()}
    >
      <i class="fas fa-bars" />
    </button>
  </Fragment>
);

export default BurgerButton;
