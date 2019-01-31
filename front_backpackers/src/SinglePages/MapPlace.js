import React, { Component } from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";

import "./SinglePage.scss";

class MapPlace extends Component {

  openPopup(marker) {
    if (marker && marker.leafletElement) {
      window.setTimeout(() => {
        marker.leafletElement.openPopup()
      })
    }
  }

  render() {
    const position = [this.props.informations.latitude, this.props.informations.longitude];
    return (
      <Map maxBounds={[[-90, -180], [90, 180]]} center={position} zoom="17">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} ref={this.openPopup}>
          <Popup>
            {this.props.informations.address}<br />{this.props.informations.city}, {this.props.informations.postCode}<br />{this.props.informations.country}
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapPlace;
