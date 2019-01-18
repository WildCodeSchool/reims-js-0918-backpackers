import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

import "./Chat.scss";

class UsersList extends Component {
  render() {
    return (
      <Fragment>
        <div
          onClick={() => this.props.backdropClickHandler()}
          className={this.props.show ? "backdrop" : ""}
        />
        <div
          className={
            this.props.show
              ? "d-flex flex-column side-drawer open"
              : "d-flex flex-column side-drawer"
          }
        >
          {this.props.users ? (
            <Fragment>
              <h2 className="px-3">En ligne :</h2>
              <ul>
                {this.props.users
                  .filter(user => user.presence.state === "online")
                  .map((user, index) => (
                    <li key={index}>
                      <Link to={`/profil/${user.name}`}>{user.name}</Link>
                    </li>
                  ))}
              </ul>
              {this.props.users.filter(
                user => user.presence.state === "offline"
              ).length < 1 ? (
                ""
              ) : (
                <Row>
                  <Col xs="12">
                    <h3 className="px-3">Hors-ligne :</h3>
                    <ul className="offline">
                      {this.props.users
                        .filter(user => user.presence.state === "offline")
                        .map((user, index) => (
                          <li key={index}>{user.name}</li>
                        ))}
                    </ul>
                  </Col>
                </Row>
              )}
            </Fragment>
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </Fragment>
    );
  }
}

export default UsersList;
