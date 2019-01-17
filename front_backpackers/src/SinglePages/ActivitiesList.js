import React, { Component, Fragment } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import ActivityThumbnail from "../HomePage/ActivityThumbnail";
import axios from "axios";

class ActivitiesList extends Component {
  componentDidMount() {
    this.props.fetchActivities();
    this.callApiActivities();
  }

  callApiActivities() {
    axios
      .get(`/profile/${this.props.match.params.id}/activities`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => this.props.viewActivities(response.data));
  }

  render() {
    return (
      <Fragment>
        <Row className="blueHeader mb-2 px-4">
          <Col xs="3">
            <Link to="/">
              <i className="fas fa-chevron-left text-white" />
            </Link>
          </Col>
          <Col xs="6">
            <p className="text-white text-center mb-0">Activités inscrites</p>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.props.activities.map(activity => (
              <ActivityThumbnail {...activity} key={activity.idActivity} />
            ))}
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default ActivitiesList;