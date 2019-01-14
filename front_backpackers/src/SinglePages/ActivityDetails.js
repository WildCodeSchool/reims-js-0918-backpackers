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
    this.callApiIdActivity();
    this.callApiParticipants();
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
        `/participate/${this.props.activity.idActivity}`,
        { idChat: this.props.activity.idChat },
        {
          headers: {
            accept: "application/json",
            authorization: "Bearer " + localStorage.getItem("BackpackersToken")
          }
        }
      )
      .then(res => this.setState({ participate: true }))
      .then(this.componentDidMount());
  }

  callApiIdActivity() {
    const participations = [];
    axios
      .get("/profile/activities", {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response =>
        response.data.map(id => participations.push(id.idActivity))
      )
      .then(res => this.setState({ idParticipation: participations }));
  }

  callApiParticipants() {
    const participant = [];
    axios
      .get(`/activity/${this.props.activity.idActivity}/participants`)
      .then(response => response.data.map(user => participant.push(user)))
      .then(res => this.setState({ participants: participant }));
  }

  desinscriptionParticipation() {
    axios
      .delete(
        `/participate/${this.props.activity.idActivity}`,
        { idChat: this.props.activity.idChat },
        {
          headers: {
            accept: "application/json",
            authorization: "Bearer " + localStorage.getItem("BackpackersToken")
          }
        }
      )
      .then(res => this.setState({ participate: false }))
      .then(this.componentDidMount());
  }

  render() {
    return (
      <Fragment>
        <Nav tabs className="mb-2">
          <NavItem className="text-center w-50">
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              L'ACTIVITÉ
            </NavLink>
          </NavItem>
          <NavItem className="text-center w-50">
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              LE LIEU
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
                        <i className="fas fa-coins" />
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
                        <i className="fas fa-swimmer" />
                      </p>
                      <p className="">Activité {this.props.activity.type}</p>
                    </div>
                  </Col>
                  <Col xs="4">
                    <div className="characteristic text-center">
                      <p className="mb-0">
                        <i className="fas fa-user-alt" />
                      </p>

                      {this.props.activity.capacity -
                        this.props.activity.participants -
                        1 <
                      0 ? (
                        <p>0 Places Restantes</p>
                      ) : (
                        <p>
                          {this.props.activity.capacity -
                            this.props.activity.participants -
                            1}{" "}
                          Places Restantes
                        </p>
                      )}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <p className="text-justify activityDescr mb-3 p-2">
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
                  <MapPlace
                    lat={this.props.activity.latitude}
                    long={this.props.activity.longitude}
                  />
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
            <div className="chat mb-2">
              <Link to="/chatlist">
                <button type="button">Chat</button>
              </Link>
            </div>
            <h3>Liste des participants</h3>
            <ul>
              <li>
                {this.props.activity.username} <span>Créateur</span>
              </li>
              {this.state.participants.map(user => (
                <li key={user.id}>{user.username}</li>
              ))}
            </ul>
            <div>
              <button
                type="button"
                className="chat"
                onClick={() => this.desinscriptionParticipation()}
              >
                Se désinscrire
              </button>
            </div>
          </Fragment>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}
export default ActivityDetails;
