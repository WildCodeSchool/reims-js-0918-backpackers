import React, { Component, Fragment } from "react";
import { Collapse, Row, Col, Button, Badge, Input } from "reactstrap";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { Spring } from "react-spring";
import { toast } from "react-toastify";
import PositionToast from "./Toast/Toastify";

import ActivityThumbnail from "./HomePage/ActivityThumbnail";

import axios from "axios";

import "./Profile.scss";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseParticipated: false,
      collapseCreated: true,
      profile: {},
      modify: false,
      file: "",
      imagePreviewUrl: "",
      description: "",
      tags: [],
      historic: {}
    };
    this.toggleCollapseParticipated = this.toggleCollapseParticipated.bind(
      this
    );
    this.toggleCollapseCreated = this.toggleCollapseCreated.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/profile`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response =>
        this.props.viewProfile([{ ...response.data[0], activities: [] }])
      );
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/profile/${this.props.match.params.username}`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => {
        this.setState({
          profile: { ...response.data[0], activities: [] },
          tags: response.data[0].hobbies.split(","),
          description: response.data[0].description
        });
      });
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/profile/${this.props.match.params.username}/activitiescreated`, {
	headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
       }
      )
      .then(response =>
        this.setState({
          profile: { ...this.state.profile, activities: response.data }
        })
      );
    axios
      .get(`/api/profile/${this.props.match.params.username}/activities`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response =>
        this.setState({
          historic: {
            activities: response.data
          }
        })
      )
      .then(() => this.forceUpdate());
  }

  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  handleTags(tags) {
    this.setState({ tags });
  }

  handleModify() {
    this.setState({ modify: true });
  }

  readUrl(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({ file: file, imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(file);
  }

  uploadModify() {
    const hobby = this.state.tags.join();
    const formData = new FormData();
    formData.append("monfichier", this.state.file);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/profile/${this.state.profile.username}`,
        { description: this.state.description, hobbies: hobby },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("BackpackersToken")
          }
        }
      )
      .then(response => {
        if (response.status === 200) {
          toast.success("Ton profil a bien été changé !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
        if (this.state.file) {
          axios.post(
            `${process.env.REACT_APP_API_URL}/api/profile/${this.state.profile.username}/upload`,
            formData,
            {
              headers: {
                "content-type": "multipart/form-data"
              }
            }
          );
        }
      })
      .then(this.setState({ modify: false }))
      .then(() => this.componentDidMount());
  }

  toggleCollapseCreated() {
    this.setState({ collapseCreated: !this.state.collapseCreated });
  }
  toggleCollapseParticipated() {
    this.setState({ collapseParticipated: !this.state.collapseParticipated });
  }

  render() {
    let { imagePreviewUrl } = this.state;
    return (
      <Fragment>
        <PositionToast />
        <Row>
          <Col xs="4" className="mt-4">
            <button
              onClick={() => this.props.history.goBack()}
              className="previousPage py-0 px-3 d-inline-block text-white"
            >
              <i className="fas pr-2 fa-angle-left" />
              Retour
            </button>
          </Col>
        </Row>
        {this.state.profile ? (
          <Spring
            from={{ opacity: 0, position: "relative", right: 100 }}
            to={{ opacity: 1, position: "relative", right: 0 }}
          >
            {props => (
              <div style={props}>
                <Fragment>
                  <Row>
                    <Col
                      xs={{ size: 6, offset: 3 }}
                      className="profilePicture justify-content-center d-flex"
                    >
                      {this.state.modify ? (
                        <div className="mb-3">
                          <div className="file-upload">
                            <i className="fas fa-cloud-upload-alt inputImage" />
                            <input
                              onChange={e => this.readUrl(e)}
                              type="file"
                              className="inputFile"
                            />
                          </div>

                    {imagePreviewUrl ? (
                      <Button className="bg-transparent border-0 mb-3 rounded-circle">
                        <img
                          className="rounded-circle preview "
                          src={imagePreviewUrl}
                          alt="preview"
                        />
                      </Button>
                    ) : (
                      <Button className="bg-transparent border-0 mb-3 rounded-circle">
                        <img
                          className="rounded-circle preview"
                          src={
                            this.state.profile.picture
                              ? `${process.env.REACT_APP_API_URL}/api/images/${
                                  this.state.profile.picture
                                }`
                              : `${process.env.REACT_APP_API_URL}/api/images/default.png`
                          }
                          alt="Profile"
                        />
                      </Button>
                    )}
                  </div>
                ) : (
                  <Button className="bg-transparent border-0 mb-3 rounded-circle">
                    <img
                      className="rounded-circle preview"
                      src={
                        this.state.profile.picture
                          ? `${process.env.REACT_APP_API_URL}/api/images/${
                              this.state.profile.picture
                            }`
                          : `${process.env.REACT_APP_API_URL}/api/images/default.png`
                      }
                      alt="Profile"
                    />
                  </Button>
                )}
              </Col>
            </Row>
            <div className="userInfos">
              <Row>
                <Col xs={{ size: 8, offset: 2 }} className="text-center mb-2">
                  <h4 className="mb-0">{`${this.state.profile.username} `}</h4>
                  <span>{this.state.profile.mail}</span>
                </Col>
                <Col xs="2">
                  {this.state.modify ? (
                    <Button
                      onClick={() => this.uploadModify()}
                      className="bg-transparent border-0 text-secondary p-0"
                    >
                      <i
                        className="fas fa-check-circle"
                        alt="Photo de profil"
                      />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => this.handleModify()}
                      className="bg-transparent border-0 text-secondary p-0"
                    >
                      <i className="fas fa-pencil-alt" alt="Photo de profil" />
                    </Button>
                  )}
                </Col>
              </Row>

                    <Row>
                      {this.state.modify ? (
                        <Col xs={{ size: 8, offset: 2 }}>
                          <div className="align-center">
                            <Input
                              value={this.state.description}
                              type="textarea"
                              placeholder="Renseigne ta description"
                              onChange={e => this.handleDescription(e)}
                            />
                          </div>
                        </Col>
                      ) : this.state.profile.description ? (
                        <Col
                          xs={{ size: 8, offset: 2 }}
                          className="text-center"
                        >
                          <p className="mb-0">
                            {this.state.profile.description}
                          </p>
                        </Col>
                      ) : (
                        <Col
                          xs={{ size: 8, offset: 2 }}
                          className="text-center"
                        >
                          <p className="mb-0">Aucune description renseignée.</p>
                        </Col>
                      )}
                    </Row>
                  </div>
                </Fragment>
              </div>
            )}
          </Spring>
        ) : (
          ""
        )}
        <Row>
          <Col xs={{ size: 8, offset: 2 }} className="homeUnderline my-2" />
        </Row>

        <Row>
          {this.state.modify ? (
            <Col xs="12" className="text-center">
              <TagsInput
                maxTags="4"
                value={this.state.tags[0] === "" ? [] : this.state.tags}
                onChange={tags => this.handleTags(tags)}
              />
            </Col>
          ) : this.state.tags.length < 1 ? (
            ""
          ) : (
            <Col xs="12" className="text-center">
              {this.state.tags.map((tag, index) => (
                <Badge key={index} className="py-1 px-2 mx-1">
                  {tag}
                </Badge>
              ))}
            </Col>
          )}
        </Row>

        <Row>
          <Col xs={{ size: 8, offset: 2 }} className="homeUnderline my-2" />
        </Row>
        <Row>
          <Col xs="12" onClick={() => this.toggleCollapseCreated()}>
            <h2 className="pr-3">
              {" "}
              {this.state.collapseCreated ? (
                <i className="pr-3 fas fa-minus" />
              ) : (
                <i className="pr-3 fas fa-plus" />
              )}
              Vos activités créées
            </h2>
            <div className="activitiesTitleUnderline mb-3 w-100" />
          </Col>
        </Row>
        <Collapse isOpen={this.state.collapseCreated}>
          <Col xs="12" md={{ size: 6, offset: 3 }}>
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
          </Col>
        </Collapse>

        <Row>
          <Col xs={{ size: 8, offset: 2 }} className="homeUnderline my-2" />
        </Row>

        <Row>
          <Col xs="12" onClick={() => this.toggleCollapseParticipated()}>
            <h2 className="pr-3">
              {this.state.collapseParticipated ? (
                <i className="pr-3 fas fa-minus" />
              ) : (
                <i className="pr-3 fas fa-plus" />
              )}
              Historique des anciennes activitées
            </h2>
            <div className="activitiesTitleUnderline mb-3 w-100" />
          </Col>
        </Row>
        <Collapse isOpen={this.state.collapseParticipated}>
          <Col xs="12" md={{ size: 6, offset: 3 }}>
            {!this.state.historic.activities ? (
              <p className="text-center">
                <i className="fas fa-spinner fa-spin" />
              </p>
            ) : this.state.historic.activities[0] ? (
              this.state.historic.activities
                .filter(activity => activity.date_diff < 0)
                .sort(activity => !activity.date_diff)
                .map(activity => (
                  <ActivityThumbnail {...activity} key={activity.idActivity} />
                ))
            ) : (
              <Row className="activityCreated">
                <Col xs="12" className="text-center mt-2">
                  <p>Vous n'avez participé pour le moment à aucune activité.</p>
                </Col>
              </Row>
            )}
          </Col>
        </Collapse>
      </Fragment>
    );
  }
}

export default Profile;
