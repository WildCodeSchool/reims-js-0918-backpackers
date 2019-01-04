import React, { Fragment } from "react";
import { NavItem, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

const Sidebar = ({ backdropClickHandler, show, picture, firstName, lastName, mail }) => (
  <Fragment>
    <Navbar className={show ? "d-flex flex-column side-drawer open" : "d-flex flex-column side-drawer"}>
      {firstName ? (
        <div className="profil d-flex flex-column align-items-center mt-3">
          <img src={picture} className="rounded-circle" alt="profil" />
          <h4>{`${firstName} ${lastName}`}</h4>
          <p>{mail}</p>
        </div>) : ""}
      < div className="menu d-flex flex-column align-items-baseline align-self-baseline pt-3">
        <NavItem>
          <NavLink to="/profil" className="pl-0 my-1"><i className="mr-2 fas fa-user-alt" />Profil</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/chatlist" className="pl-0 my-1"> <i className="mr-2 far fa-comments" />Messages</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" className="pl-0 my-1"> <i className="mr-2 far fa-calendar-alt" />Calendrier</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" className="pl-0 my-1"> <i className="mr-2 far fa-heart" />Coups de coeur</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" className="pl-0 my-1"><i className="mr-2 fas fa-wrench" />Paramètres</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" className="pl-0 my-1"><i className="mr-2 fas fa-comment-alt" />Demandes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" className="pl-0 my-1"><i className="mr-2 fas fa-sign-out-alt" />Se déconnecter</NavLink>
        </NavItem>
      </div>
      <div className="d-flex mb-2 flex-column mt-auto align-items-center">
        <NavItem>
          <NavLink to="/" >Mentions légales</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" >CGU</NavLink>
        </NavItem>
      </div>
    </Navbar>
    <div
      onClick={() => backdropClickHandler()}
      className={show ? "backdrop" : ""}
    />
  </Fragment >
);

export default Sidebar;
