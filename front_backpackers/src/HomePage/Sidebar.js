import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";

import Michel from "../img/Michel400.jpg";
import "./Sidebar.css";

const Sidebar = ({ backdropClickHandler, show }) => (
  <Fragment>
    <nav className={show ? "side-drawer open" : "side-drawer"}>
      <div className="profil mt-4">
        <img src={Michel} alt="profil" />
        <h4>Michel Descotes</h4>
        <p className="m-0">michel.descotes@mail.com</p>
      </div>
      <Row>
        <Col xs={{ size: 8, offset: 2 }} className="homeUnderline mt-1 mb-4" />
      </Row>
      <ul className="menu">
        <li>
          <i className="mr-2 fas fa-user-alt" />
          <a href="/">Profil</a>
        </li>
        <li>
          <i className="mr-2 far fa-comments" />
          <a href="/">Messages</a>
        </li>
        <li>
          <i className="mr-2 far fa-calendar-alt" />
          <a href="/">Calendrier</a>
        </li>
        <li>
          <i className="mr-2 far fa-heart" />
          <a href="/">Coups de coeur</a>
        </li>
        <li>
          <i className="mr-2 fas fa-wrench" />
          <a href="/">Paramètres</a>
        </li>
        <li>
          <i className="mr-2 fas fa-comment-alt" />
          <a href="/">Demandes</a>
        </li>
        <li>
          <i className="mr-2 fas fa-sign-out-alt" />
          <a href="/">Se déconnecter</a>
        </li>
      </ul>
      <ul className="mentions">
        <li>
          <a href="/">Mentions légales</a>
        </li>
        <li>
          <a href="/">CGU</a>
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
