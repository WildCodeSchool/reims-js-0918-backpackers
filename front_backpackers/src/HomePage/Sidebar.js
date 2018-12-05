import React, { Fragment } from "react";

import "./Sidebar.css";

const Sidebar = ({ backdropClickHandler }) => (
  <Fragment>
    <nav className="side-drawer">
      <ul>
        <li>
          <a href="/">Profil</a>
        </li>
        <li>
          <a href="/">Profil</a>
        </li>
      </ul>
    </nav>
    <div onClick={() => backdropClickHandler()} className="backdrop" />
  </Fragment>
);

export default Sidebar;
