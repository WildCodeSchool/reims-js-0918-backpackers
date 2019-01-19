import React, { Component, Fragment } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { Row } from "reactstrap";

import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import PlaceThumbnail from "./HomePage/PlaceThumbnail";

import "./Maps.scss";
require("react-leaflet-markercluster/dist/styles.min.css");

const MyPopupMarker = ({ content, position, getMarkerInfos }) =>
  content ? (
    <Marker onClick={() => getMarkerInfos(content)} position={position} />
  ) : (
    <Marker position={position} />
  );

const MyMarkersList = ({ markers, getMarkerInfos }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} getMarkerInfos={getMarkerInfos} />
  ));
  return <Fragment>{items}</Fragment>;
};

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerInfos: {},
      markers: [{ key: "myPosition", position: this.props.map }]
    };
    this.getMarkerInfos = this.getMarkerInfos.bind(this);
    this.resetMarkerInfos = this.resetMarkerInfos.bind(this);
  }

  componentDidMount() {
    const map = this.leafletMap.leafletElement;

    var myIcon = L.icon({
      className: "myMarker",
      iconUrl: `http://localhost:3010/images/${
        this.props.profile[0].picture
          ? this.props.profile[0].picture
          : "default.png"
      }`,
      iconSize: [30, 30],
      shadowUrl: "/images/marker_shadow.png",
      shadowSize: [60, 50]
    });
    L.marker(this.props.map, { icon: myIcon }).addTo(map);
  }

  getMarkerInfos(content) {
    this.setState({ markerInfos: content });
  }

  resetMarkerInfos() {
    this.setState({ markerInfos: {} });
  }

  render() {
    const markers = this.props.places.map(place => ({
      key: place.name,
      position: [place.latitude, place.longitude],
      content: place
    }));

    return (
      <Row>
        <Map
          ref={m => {
            this.leafletMap = m;
          }}
          maxBounds={[[-90, -180], [90, 180]]}
          center={this.props.map}
          zoom="15"
          maxZoom="20"
          onClick={() => this.resetMarkerInfos()}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup>
            <MyMarkersList
              markers={markers}
              getMarkerInfos={this.getMarkerInfos}
            />
          </MarkerClusterGroup>
        </Map>
        {this.state.markerInfos.name ? (
          <div className="mapPopup">
            <PlaceThumbnail {...this.state.markerInfos} />
          </div>
        ) : (
          ""
        )}
      </Row>
    );
  }
}

export default Maps;
