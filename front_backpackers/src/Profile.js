import React, { Component, Fragment } from "react";
import { Row, Col, Button, Media, Badge } from "reactstrap";
import { Link } from "react-router-dom";

import ActivityThumbnail from "./HomePage/ActivityThumbnail";

import axios from "axios";

import "./Profile.scss";

class Profile extends Component {
  state = {
    profile: {}
  }
  componentDidMount() {
    if (!this.props.profile[0]) {
      axios
        .get(`/profile`, {
          headers: {
            accept: "application/json",
            authorization: "Bearer " + localStorage.getItem("BackpackersToken")
          }
        })
        .then(response =>
          this.props.viewProfile([{ ...response.data[0], activities: [] }])
        );
    }
    axios
      .get(`/profile/${this.props.match.params.username}`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response =>
        this.setState({ profile: { ...response.data[0], activities: [] } })
      );

    axios
      .get(`/profile/${this.props.match.params.username}/activitiescreated`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response =>
        this.setState({
          profile: { ...this.state.profile, activities: response.data }
        })
      );
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col xs="4" className="mt-4">
            <Link
              to="/"
              className="previousPage py-0 px-3 d-inline-block text-white"
            >
              <i className="fas pr-2 fa-angle-left" />
              Retour
            </Link>
          </Col>
        </Row>
        {this.state.profile ? (
          <Fragment>
            <Row>
              <Col
                xs={{ size: 6, offset: 3 }}
                className="profilePicture justify-content-center d-flex"
              >
                <Button className="bg-transparent border-0 mb-3 rounded-circle">
                  <img
                    className="rounded-circle"
                    src={
                      this.state.profile.picture
                        ? `http://localhost:3010/images/${
                            this.state.profile.picture
                          }`
                        : `http://localhost:3010/images/default.png`
                    }
                    alt="Profile"
                  />
                </Button>
              </Col>
            </Row>
            <div className="userInfos">
              <Row>
                <Col xs={{ size: 8, offset: 2 }} className="text-center mb-2">
                  <h4 className="mb-0">{`${this.state.profile.username} `}</h4>
                  <span>{this.state.profile.mail}</span>
                </Col>
                <Col xs="2">
                  <Button className="bg-transparent border-0 text-secondary p-0">
                    <i className="fas fa-pencil-alt" alt="Photo de profil" />
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col xs={{ size: 8, offset: 2 }} className="text-center">
                  <p className="mb-0">{this.state.profile.description}</p>
                </Col>
              </Row>
            </div>
          </Fragment>
        ) : (
          ""
        )}

        {/* <Row>
          <Col xs={{ size: 8, offset: 2 }} className="text-center mt-3">
            <div className="achievements d-inline-block p-1">
              <img
                className="px-1"
                src="https://via.placeholder.com/30"
                alt="badge"
              />
              <img
                className="px-1"
                src="https://via.placeholder.com/30"
                alt="badge"
              />
              <img
                className="px-1"
                src="https://via.placeholder.com/30"
                alt="badge"
              />
              <img
                className="px-1"
                src="https://via.placeholder.com/30"
                alt="badge"
              />
            </div>
          </Col>
        </Row> */}

        <Row>
          <Col xs={{ size: 8, offset: 2 }} className="homeUnderline my-2" />
        </Row>

        <Row>
          <Col xs="12" className="text-center">
            <Badge className="py-1 px-2 mx-1">AquaPoney</Badge>
            <Badge className="py-1 px-2 mx-1">Cinéma</Badge>
            <Badge className="py-1 px-2 mx-1">Japon</Badge>
            <Badge className="py-1 px-2 mx-1">Jeux Vidéo</Badge>
          </Col>
        </Row>

        <Row>
          <Col xs={{ size: 8, offset: 2 }} className="homeUnderline my-2" />
        </Row>
        <Row>
          <Col xs="12">
            <h2 className="pr-3">Vos activités créées</h2>
            <div className="activitiesTitleUnderline mb-3 w-100" />
          </Col>
        </Row>
        {!this.state.profile.activities ? (
          <p className="text-center">
            <i className="fas fa-spinner fa-spin" />
          </p>
        ) : this.state.profile.activities[0] ? (
          this.state.profile.activities.map(activity => (
            <ActivityThumbnail {...activity} key={activity.idActivity} />
          ))
        ) : (
          <Row className="activityCreated">
            <Col xs="12" className="text-center mt-2">
              <p>Vous n'avez proposé pour le moment aucune activité.</p>
            </Col>
          </Row>
        )}

        <Row>
          <Col xs={{ size: 8, offset: 2 }} className="homeUnderline my-2" />
        </Row>

        <Row>
          <Col xs="12">
            <h2 className="pr-3">Historique des anciennes activitées</h2>
            <div className="activitiesTitleUnderline mb-3 w-100" />
          </Col>

          <Col xs="12">
            <Media className="d-flex align-items-stretch">
              <Media left href="#">
                <Media
                  object
                  src="https://via.placeholder.com/150"
                  alt="activity"
                  className="activityPicture"
                />
              </Media>
              <Media body className="d-flex flex-column">
                <Media
                  heading
                  className="mb-1 mx-1 d-flex justify-content-between"
                >
                  <span>
                    <i className="fas fa-location-arrow pr-1" />
                    ATHENES
                  </span>
                  <span>
                    <i className="fas fa-calendar pr-1" />
                    Ferme dans 5 jours
                  </span>
                </Media>
                Salut ! Je Cherche 5 rafteurs pour rafter le long du fleuve ! Va
                va être CHANMAXX n'hésitez pas à vous inscrire!
                <div className="d-flex align-items-end justify-content-between mt-auto">
                  <Button className="seeItem">Voir</Button>
                  <span className="itemListPrice pr-2">
                    15€ /
                    <i className="far fa-user" />
                  </span>
                </div>
              </Media>
            </Media>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Profile;
