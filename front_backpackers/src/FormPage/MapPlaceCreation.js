import React, { Component, Fragment } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Row } from "reactstrap";

import "../Maps.scss";

class MapPlaceCreation extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Row>
        {console.log("map", this.props.center)}
        <Map center={this.props.center} zoom="15">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </Row>
    );
  }
}

export default MapPlaceCreation;
