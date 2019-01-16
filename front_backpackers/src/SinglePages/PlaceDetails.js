import React, { Component, Fragment } from "react";
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
import ActivityThumbnail from "../HomePage/ActivityThumbnail";
import { Link } from "react-router-dom";
import MapPlace from "./MapPlace";
import axios from "axios";

class PlaceDetails extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      profil: {}
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount() {
    axios
      .get("/profile", {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => this.setState({ profil: response.data[0] }));
  }

  render() {
    const typePicture = `/images/${
      this.props.place.type === "Apéritifs"
        ? "aperitif"
        : this.props.place.type === "Aquatique"
        ? "aquatic"
        : this.props.place.type === "Aventure"
        ? "aventure"
        : this.props.place.type === "Bien-être"
        ? "bien-etre"
        : this.props.place.type === "Culturel"
        ? "culturel"
        : this.props.place.type === "Déplacements"
        ? "deplacement"
        : this.props.place.type === "Enfants"
        ? "enfants"
        : this.props.place.type === "Nocturne"
        ? "nocturne"
        : "restauration"
    }.png`;
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
              LE LIEU
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
                      {this.props.place.name}
                    </h3>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs="6">
                    <div className="price characteristic text-center">
                      <p className="mb-0">
                        <i
                          className="fas fa-coins"
                          style={{ fontSize: "30px" }}
                        />
                      </p>
                      <p>
                        {this.props.place.price > 0 ? (
                          <Fragment>
                            {this.props.place.price}
                            <i className="fas fa-euro-sign pl-1" />
                          </Fragment>
                        ) : (
                          "Gratuit"
                        )}
                      </p>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div className="characteristic text-center">
                      <p className="mb-0">
                        <img
                          style={{ width: "30px" }}
                          src={typePicture}
                          alt={this.props.place.type}
                        />
                      </p>
                      <p className="">{this.props.place.type}</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <p className="text-justify singleDescr mb-3 p-2">
                      {this.props.place.description}
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
                    informations={this.props.place}
                  />
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </TabPane>
        </TabContent>

        <Row>
          <Col xs="12">
            <h3 className="text-center p-1 mt-1">Les activités</h3>
          </Col>
        </Row>
        {this.props.place.activities.map(activity =>
          activity.capacity - 1 - activity.participants > 0 ? (
            <ActivityThumbnail
              profil={this.state.profil}
              {...activity}
              key={activity.idActivity}
            />
          ) : (
            ""
          )
        )}

        <Row>
          <Col xs="12">
            <Link
              to={`/place/${this.props.place.id}/newactivity`}
              className="w-100 d-block text-white text-center new_activity mt-3"
            >
              <i className="fas fa-pencil-alt" /> Nouvelle Activité
            </Link>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default PlaceDetails;
