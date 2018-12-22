import React, { Component, Fragment } from "react";
import axios from "axios"

import Header from "./Header.js";
import Caroussel from "./Caroussel";
import Details from "./Details";

class PlacePage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    axios
      .get(`/activity/${this.props.match.params.id}`)
      .then(response => this.props.viewActivity(response.data[0]))
  }

  render() {
    return (
      <Fragment>
        {this.props.activity.name ?
          <Fragment>
            {console.log(this.props.match.params.id)}
            <Header place={this.props.activity.city} />
            <Caroussel activity={this.props.activity} />
            <Details activity={this.props.activity} />
          </Fragment>
          : ""
        }
      </Fragment>
    )
  }

}

export default PlacePage;
