import React, { Component } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { Row } from "reactstrap";

import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import PlaceThumbnail from "./HomePage/PlaceThumbnail";

import "./Maps.scss";
require("react-leaflet-markercluster/dist/styles.min.css");

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerInfos: {},
      markers: [
        {
          key: "myPosition",
          position: this.props.map.coords ? this.props.map.coords : ""
        }
      ]
    };
    this.getMarkerInfos = this.getMarkerInfos.bind(this);
    this.resetMarkerInfos = this.resetMarkerInfos.bind(this);
  }

  componentDidMount() {
    if (this.props.isGeolocated && localStorage.getItem("BackpackersToken")) {
      const map = this.leafletMap.leafletElement;

      const myIcon = L.icon({
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
      L.marker(this.props.map.coords, { icon: myIcon }).addTo(map);
    }
  }

  getMarkerInfos(content) {
    this.setState({ markerInfos: content });
  }

  resetMarkerInfos() {
    this.setState({ markerInfos: {} });
  }

  render() {
    const typePicture = type =>
      `/images/map_${
        type === "Apéritifs"
          ? "aperitif"
          : type === "Aquatique"
          ? "aquatique"
          : type === "Aventure"
          ? "aventure"
          : type === "Bien-être"
          ? "bien-etre"
          : type === "Culturel"
          ? "culturel"
          : type === "Déplacements"
          ? "deplacement"
          : type === "Enfants"
          ? "enfants"
          : type === "Nocturne"
          ? "nocturne"
          : "restauration"
      }.png`;

    return (
      <Row>
        <Map
          ref={m => {
            this.leafletMap = m;
          }}
          maxBounds={[[-90, -180], [90, 180]]}
          center={this.props.map.coords}
          zoom="15"
          maxZoom="20"
          onClick={() => this.resetMarkerInfos()}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup>
            {this.props.places
              .filter(place =>
                this.props.map.filter === "Pas de filtre"
                  ? place
                  : place.type === this.props.map.filter
              )
              .map(place => (
                <Marker
                  onClick={() => this.getMarkerInfos(place)}
                  key={place.id}
                  position={[place.latitude, place.longitude]}
                  icon={
                    new L.Icon({
                      iconUrl: typePicture(place.type),
                      iconSize: new L.Point(34, 53),
                      shadowUrl: "/images/map_shadow.png",
                      shadowSize: [34, 60]
                    })
                  }
                />
              ))}
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
