import React, { Fragment } from "react";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";
import { Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = ({ backdropClickHandler, show }) => (
  <Fragment>
    <Navbar className={show ? "side-drawer open" : "side-drawer"}>
      <NavItem className="profil d-flex flex-column align-items-center mt-4">
        <img src="https://via.placeholder.com/100" alt="profil" />
        <h4>Michel Descotes</h4>
        <p className="rounded-circle">michel.descotes@mail.com</p>
      </NavItem>
      <NavItem>
        <div className="underline mt-3 mb-4" />
      </NavItem>
      <Nav className="menu d-flex flex-column align-items-baseline align-self-baseline">
        <Link to="/profil">
          <NavItem>
            <i className="mr-2 fas fa-user-alt" />
            <NavLink className="pl-0">Profil</NavLink>
          </NavItem>
        </Link>
        <NavItem>
          <i className="mr-2 far fa-comments" />
          <NavLink className="pl-0">Messages</NavLink>
        </NavItem>
        <NavItem>
          <i className="mr-2 far fa-calendar-alt" />
          <NavLink className="pl-0">Calendrier</NavLink>
        </NavItem>
        <NavItem>
          <i className="mr-2 far fa-heart" />
          <NavLink className="pl-0">Coups de coeur</NavLink>
        </NavItem>
        <NavItem>
          <i className="mr-2 fas fa-wrench" />
          <NavLink className="pl-0">Paramètres</NavLink>
        </NavItem>
        <NavItem>
          <i className="mr-2 fas fa-comment-alt" />
          <NavLink className="pl-0">Demandes</NavLink>
        </NavItem>
        <NavItem>
          <i className="mr-2 fas fa-sign-out-alt" />
          <NavLink className="pl-0">Se déconnecter</NavLink>
        </NavItem>
      </Nav>
      <Nav className="d-flex flex-column align-items-center">
        <NavItem>
          <NavLink>Mentions légales</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>CGU</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
    <div
      onClick={() => backdropClickHandler()}
      className={show ? "backdrop" : ""}
    />
  </Fragment>
);

export default Sidebar;
