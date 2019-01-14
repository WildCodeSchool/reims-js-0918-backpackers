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
import { Link } from "react-router-dom";
import classnames from "classnames";
import MapPlace from "./MapPlace";

class ActivityDetails extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      idParticipation: []
    };
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
      .then(
        //(console.log("ok"));
        this.props.history.push(`/`)
      );
  }

  componentDidMount() {
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

  render() {

    const typePicture = `/images/${this.props.activity.type === "Apéritifs" ? "aperitif"
      : this.props.activity.type === "Aquatique" ? "aquatic"
        : this.props.activity.type === "Aventure" ? "aventure"
          : this.props.activity.type === "Bien-être" ? "bien-etre"
            : this.props.activity.type === "Culturel" ? "culturel"
              : this.props.activity.type === "Déplacements" ? "deplacement"
                : this.props.activity.type === "Enfants" ? "enfants"
                  : this.props.activity.type === "Nocturne" ? "nocturne"
                    : "restauration"}.png`

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
                        <i className="fas fa-coins" style={{ fontSize: "30px" }} />
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
                        <img style={{ width: "30px" }} src={typePicture} alt={this.props.activity.type} />
                      </p>
                      <p className="">{this.props.activity.type}</p>
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
        {this.state.idParticipation &&
        this.state.idParticipation.includes(this.props.activity.idActivity) ? (
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
        )}
      </Fragment>
    );
  }
}
export default ActivityDetails;
