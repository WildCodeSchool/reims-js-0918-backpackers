import React, { Component, Fragment } from "react";

import Header from "./Header.js";
import Caroussel from "./Caroussel";
import Details from "./Details";

class SinglePage extends Component {
  render() {
    return (
      <Fragment>
        {this.props.activity.name ?
          <Fragment>
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

export default SinglePage;
