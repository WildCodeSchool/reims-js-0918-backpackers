import React, { Component, Fragment } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Row } from "reactstrap";

import "../Maps.scss";

class MapPlace extends Component {
  state = {
    marker: [{ key: "marker1", position: this.props.map }]
  };
  render() {
    return (
      <Row>
        <Map center={this.props.map} zoom="15">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </Row>
    );
  }
}

export default MapPlace;
