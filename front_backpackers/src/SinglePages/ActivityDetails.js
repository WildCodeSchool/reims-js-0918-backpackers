import React, { Component, Fragment } from "react";
import axios from "axios";
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import MapPlace from "./MapPlace";

class ActivityDetails extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      idParticipation: [],
      participate: false,
      participants: []
    };
  }

  componentDidMount() {
    this.callApiParticipants();
    this.callApiIdActivity();
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  activeParticipation() {
    axios
      .post(
        `/api/participate/${this.props.activity.idActivity}`,
        { idChat: this.props.activity.idChat },
        {
          headers: {
            accept: "application/json",
            authorization: "Bearer " + localStorage.getItem("BackpackersToken")
          }
        }
      )
      .then(() => this.props.callApiActivity())
      .then(this.setState({ participate: true }))
      .then(this.componentDidMount());
  }

  callApiIdActivity() {
    const participations = [];
    axios
      .get(`/api/profile/${this.props.profile}/activities`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response =>
        response.data.map(id => participations.push(id.idActivity))
      )
      .then(() => this.setState({ idParticipation: participations }));
  }

  callApiParticipants() {
    const participant = [];
    axios
      .get(`/api/activity/${this.props.activity.idActivity}/participants`)
      .then(response => response.data.map(user => participant.push(user)))
      .then(() => this.setState({ participants: participant }));
  }

  desinscriptionParticipation() {
    axios
      .post(
        `/api/participate/remove/${this.props.activity.idActivity}`,
        { idChat: this.props.activity.idChat },
        {
          headers: {
            accept: "application/json",
            authorization: "Bearer " + localStorage.getItem("BackpackersToken")
          }
        }
      )
      .then(() => this.props.callApiActivity())
      .then(() => this.setState({ participate: false }))
      .then(this.componentDidMount());
  }

  render() {
    const typePicture = `/images/${
      this.props.activity.type === "Apéritifs"
        ? "aperitif"
        : this.props.activity.type === "Aquatique"
        ? "aquatic"
        : this.props.activity.type === "Aventure"
        ? "aventure"
        : this.props.activity.type === "Bien-être"
        ? "bien-etre"
        : this.props.activity.type === "Culturel"
        ? "culturel"
        : this.props.activity.type === "Déplacements"
        ? "deplacement"
        : this.props.activity.type === "Enfants"
        ? "enfants"
        : this.props.activity.type === "Nocturne"
        ? "nocturne"
        : "restauration"
    }.png`;

    return (
      <Fragment>
        <Nav tabs className="mb-2">
          <NavItem className="text-center w-50">
            <NavLink
              className={classnames({
                active: this.state.activeTab === "1"
              })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              L'ACTIVITÉ
            </NavLink>
          </NavItem>
          <NavItem className="text-center w-50">
            <NavLink
              className={classnames({
                active: this.state.activeTab === "2"
              })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              MAP
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col xs={{ size: "10", offset: 1 }}>
                <Row>
                  <Col xs="12">
                    <h3 className="text-center p-1 mt-1">
                      {this.props.activity.name}
                    </h3>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs="4">
                    <div className="price characteristic text-center">
                      <p className="mb-0">
                        <i
                          className="fas fa-coins"
                          style={{ fontSize: "30px" }}
                        />
                      </p>
                      <p>
                        {this.props.activity.price > 0 ? (
                          <Fragment>
                            {this.props.activity.price}
                            <i className="fas fa-euro-sign pl-1" />
                          </Fragment>
                        ) : (
                          "Gratuit"
                        )}
                      </p>
                    </div>
                  </Col>
                  <Col xs="4">
                    <div className="characteristic text-center">
                      <p className="mb-0">
                        <img
                          style={{ width: "30px" }}
                          src={typePicture}
                          alt={this.props.activity.type}
                        />
                      </p>
                      <p className="">{this.props.activity.type}</p>
                    </div>
                  </Col>
                  <Col xs="4">
                    <div className="characteristic text-center">
                      <p className="mb-0">
                        <i className="fas fa-user-alt" />
                      </p>
                      {this.props.activitycapacity -
                        this.props.activity.participants <
                      0 ? (
                        <p>0 Places Restantes</p>
                      ) : (
                        <p>
                          {this.props.activity.capacity -
                            this.props.activity.participants}{" "}
                          Places Restantes
                        </p>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6">
                    <p>
                      <i className="fas fa-calendar pr-1" />
                      {this.props.activity.eventDate.split("T")[0]}
                    </p>
                  </Col>
                  <Col xs="6">
                    <p className="text-right">
                      {this.props.activity.eventTime}
                      <i className="far fa-clock pl-1" />
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <p className="text-justify singleDescr mb-3 p-2">
                      {this.props.activity.descriptionActivity}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="mapDetails">
              <Col xs="12">
                {this.state.activeTab === "2" ? (
                  <MapPlace informations={this.props.activity} />
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        {this.props.activity.id_creator !== this.props.profile ? (
          this.state.idParticipation.includes(
            this.props.activity.idActivity
          ) ? (
            <div className="validate">
              <p>Validé</p>
            </div>
          ) : (
            <div className="participate">
              <button
                onClick={() => this.activeParticipation()}
                type="button"
                className="btn"
              >
                Participer
              </button>
            </div>
          )
        ) : (
          ""
        )}
        {this.state.idParticipation.includes(this.props.activity.idActivity) ||
        this.props.activity.id_creator === this.props.profile ? (
          <Fragment>
            {this.state.idParticipation.includes(
              this.props.activity.idActivity
            ) ? (
              <div className="chat mb-2">
                <Link to="/chatlist">
                  <button type="button">Chat</button>
                </Link>
              </div>
            ) : (
              ""
            )}
            {!this.state.idParticipation.includes(
              this.props.activity.idActivity
            ) ? (
              <div className="participate">
                <button
                  onClick={() => this.activeParticipation()}
                  type="button"
                  className="btn"
                >
                  Participer
                </button>
              </div>
            ) : (
              ""
            )}
            <h3 className="text-center mt-2">Liste des participants</h3>
            <ul className="text-center listParticipants mr-5">
              {this.state.participants.length < 1 ? (
                "Aucun participants"
              ) : (
                <Fragment>
                  {this.state.participants
                    .filter(
                      creator => creator.id === this.props.activity.id_creator
                    )
                    .map((creator, index) => (
                      <li key={index}>
                        <Link to={`/profil/${creator.username}`}>
                          {creator.username} (Créateur)
                        </Link>
                      </li>
                    ))}
                  {this.state.participants
                    .filter(
                      creator => creator.id !== this.props.activity.id_creator
                    )
                    .map(user => (
                      <li key={user.id}>
                        <Link to={`/profil/${user.username}`}>
                          {user.username}
                        </Link>
                      </li>
                    ))}
                </Fragment>
              )}
            </ul>
            {this.state.idParticipation.includes(
              this.props.activity.idActivity
            ) ? (
              <Fragment>
                <button
                  type="button"
                  className="desinscription"
                  onClick={() => this.desinscriptionParticipation()}
                >
                  Se désinscrire
                </button>
              </Fragment>
            ) : (
              ""
            )}
          </Fragment>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}
export default ActivityDetails;
