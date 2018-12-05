import React, { Fragment } from "react";

import "./Sidebar.css";

const Sidebar = ({ backdropClickHandler, show }) => (
  <Fragment>
    <nav className={show ? "side-drawer open" : "side-drawer"}>
      <ul>
        <li>
          <a href="/">Profil</a>
        </li>
        <li>
          <a href="/">Profil</a>
        </li>
      </ul>
    </nav>
    <div
      onClick={() => backdropClickHandler()}
      className={show ? "backdrop" : ""}
    />
  </Fragment>
);

export default Sidebar;
