import React, { Component, Fragment, createRef } from "react";
import { Map, TileLayer } from "react-leaflet";
import { Row, Input } from "reactstrap";

import L from "leaflet";
import LCG from "leaflet-control-geocoder";
import { OpenStreetMapProvider } from "leaflet-geosearch";

import "./FormPage.scss";

const provider = new OpenStreetMapProvider();

let marker;

class MapPlaceCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      addressResults: [],
      marker: {
        lat: this.props.center[0],
        lng: this.props.center[1]
      }
    };

    this.refmarker = createRef();
  }

  componentDidMount() {
    const map = this.leafletMap.leafletElement;
    const geocoder = LCG.L.Control.Geocoder.nominatim();
    geocoder.reverse(this.state.marker, map.options.crs.scale(20), results => {
      const r = results[0];
      if (r) {
        this.props.getAddress({
          ...r.properties.address,
          ...this.state.marker
        });
        marker = L.marker(r.center)
          .bindPopup(r.name)
          .addTo(map)
          .openPopup();
      }
    });
    map.on("click", e => {
      geocoder.reverse(e.latlng, map.options.crs.scale(20), results => {
        const r = results[0];
        if (r) {
          this.setState({
            address: r.name
          });
          this.props.getAddress({ ...r.properties.address, ...e.latlng });
          if (marker) {
            marker
              .setLatLng(r.center)
              .setPopupContent(r.html || r.name)
              .openPopup();
          } else {
            marker = L.marker(r.center)
              .bindPopup(r.name)
              .addTo(map)
              .openPopup();
          }
        }
      });
    });
  }

  selectAddress(address) {
    this.setState({
      address: address.label,
      addressResults: [],
      marker: address.center
    });
    const map = this.leafletMap.leafletElement;
    const geocoder = LCG.L.Control.Geocoder.nominatim();

    geocoder.reverse(
      { lat: address.y, lng: address.x },
      map.options.crs.scale(20),
      results => {
        const r = results[0];
        if (r) {
          this.props.getAddress({
            ...r.properties.address,
            lat: address.y,
            lng: address.x
          });
          if (marker) {
            marker
              .setLatLng(r.center)
              .setPopupContent(r.html || r.name)
              .openPopup();
          } else {
            marker = L.marker(r.center)
              .bindPopup(r.name)
              .addTo(map)
              .openPopup();
          }
        }
      }
    );
  }

  handleSearchInput(event) {
    const request = event.target.value;
    this.setState({ address: request });
    provider
      .search({ query: request !== "" ? request : request })
      .then(results => {
        this.setState({
          addressResults: results.slice(0, 5),
          popoverOpen: true
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Map
            center={this.state.marker}
            maxBounds={[[-90, -180], [90, 180]]}
            zoom="15"
            ref={m => {
              this.leafletMap = m;
            }}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
        </Row>
        <Row>
          <Input
            autoComplete="off"
            id="PopoverFocus"
            className="Form-Input text-left"
            onChange={event => this.handleSearchInput(event)}
            placeholder="Ou tapez une adresse"
            type="search"
            name="address"
            value={this.state.address}
          />
          {this.state.addressResults.length > 0
            ? this.state.addressResults.map((result, index) => (
                <p key={index} onClick={() => this.selectAddress(result)}>
                  {result.label}
                </p>
              ))
            : ""}
        </Row>
      </Fragment>
    );
  }
}

export default MapPlaceCreation;
