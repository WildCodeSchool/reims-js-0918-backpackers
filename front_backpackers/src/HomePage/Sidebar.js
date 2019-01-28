import React, { Component, Fragment } from "react";
import { NavItem, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

class Sidebar extends Component {
  logOut() {
    this.props.backdropClickHandler();
    localStorage.removeItem("BackpackersToken");
    this.props.history.push("/");
  }

  render() {
    return (
      <Fragment>
        <Navbar
          className={
            this.props.show
              ? "d-flex flex-column side-drawer open"
              : "d-flex flex-column side-drawer"
          }
        >
          {this.props.username ? (
            <div className="profil d-flex flex-column align-items-center mt-3">
              <img
                className="rounded-circle"
                src={
                  this.props.picture
                    ? `http://localhost:3010/api/images/${this.props.picture}`
                    : `http://localhost:3010/api/images/default.png`
                }
                alt="Profile"
              />
              <h4>{`${this.props.username} `}</h4>
              <p>{this.props.mail}</p>
            </div>
          ) : (
            ""
          )}
          <div className="menu d-flex flex-column align-items-baseline align-self-baseline pt-3">
            <NavItem>
              <NavLink
                onClick={() => this.props.backdropClickHandler()}
                to={`/profil/${this.props.username}`}
                className="pl-0 my-1"
              >
                <i className="mr-2 fas fa-user-alt" />
                Profil
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => this.props.backdropClickHandler()}
                to="/chatlist"
                className="pl-0 my-1"
              >
                {" "}
                <i className="mr-2 far fa-comments" />
                Messages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => this.props.backdropClickHandler()}
                to={`/profil/${this.props.username}/activities`}
                className="pl-0 my-1"
              >
                {" "}
                <i className="mr-2 far fa-calendar-alt" />
                Activités inscrites
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                onClick={() => this.props.backdropClickHandler()}
                to="/"
                className="pl-0 my-1"
              >
                {" "}
                <i className="mr-2 far fa-heart" />
                Coups de coeur
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink
                onClick={() => this.props.backdropClickHandler()}
                to="/"
                className="pl-0 my-1"
              >
                <i className="mr-2 fas fa-wrench" />
                Paramètres
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                onClick={() => this.props.backdropClickHandler()}
                to="/"
                className="pl-0 my-1"
              >
                <i className="mr-2 fas fa-comment-alt" />
                Demandes
              </NavLink>
            </NavItem> */}
            {localStorage.getItem("BackpackersToken") ? (
              <NavItem>
                <NavLink
                  onClick={this.logOut.bind(this)}
                  to="/login"
                  className="pl-0 my-1"
                >
                  <i className="mr-2 fas fa-sign-out-alt" />
                  Se déconnecter
                </NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink
                  onClick={this.logOut.bind(this)}
                  to="/login"
                  className="pl-0 my-1"
                >
                  <i className="mr-2 fas fa-sign-in-alt" />
                  Se connecter
                </NavLink>
              </NavItem>
            )}
          </div>
          <div className="d-flex mb-2 flex-column mt-auto align-items-center">
            <NavItem>
              <NavLink onClick={() => this.props.backdropClickHandler()} to="/">
                Mentions légales
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => this.props.backdropClickHandler()} to="/">
                CGU
              </NavLink>
            </NavItem>
          </div>
        </Navbar>
        <div
          onClick={() => this.props.backdropClickHandler()}
          className={this.props.show ? "backdrop" : ""}
        />
      </Fragment>
    );
  }
}

export default Sidebar;
