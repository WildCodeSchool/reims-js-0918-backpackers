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

class PlaceDetails extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
              Map
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
                        <i className="fas fa-coins" />
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
                        <i className="fas fa-swimmer" />
                      </p>
                      <p className="">Activité {this.props.place.type}</p>
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
            <Row>
              <MapPlace />
            </Row>
          </TabPane>
        </TabContent>

        <Row>
          <Col xs="12">
            <h3 className="text-center p-1 mt-1">Les activités</h3>
          </Col>
        </Row>
        {console.log("place", this.props.place)}
        {this.props.place.activities.map(activity => (
          <ActivityThumbnail {...activity} key={activity.idActivity} />
        ))}

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
