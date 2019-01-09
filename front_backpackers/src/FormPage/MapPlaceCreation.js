import React, { Component, createRef } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { Row } from "reactstrap";

import L from "leaflet"
import LCG from "leaflet-control-geocoder"



import "./FormPage.scss";

class MapPlaceCreation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marker: {
        lat: this.props.center[0],
        lng: this.props.center[1],
      },
      draggable: true,
    }
    this.refmarker = createRef()
  }
  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  componentDidMount() {
    // this.updatePosition()
    // this.getAddress()

    const map = this.leafletMap.leafletElement;
    const geocoder = LCG.L.Control.Geocoder.nominatim();
    let marker;
    map.on('click', e => {
      geocoder.reverse(e.latlng, map.options.crs.scale(20), results => {
        var r = results[0];
        if (r) {
          if (marker) {
            marker.
              setLatLng(r.center).
              setPopupContent(r.html || r.name).
              openPopup();
          } else {
            marker = L.marker(r.center)
              .bindPopup(r.name)
              .addTo(map)
              .openPopup();
          }
        }
      })
    })
  }

  // updatePosition = () => {
  //   const marker = this.refmarker.current
  //   if (marker != null) {
  //     this.setState({
  //       marker: marker.leafletElement.getLatLng(),
  //     }, this.getAddress())
  //   }
  // }
  // getAddress() {
  //   const map = this.leafletMap.leafletElement;
  //   const geocoder = LCG.L.Control.Geocoder.nominatim();

  //   geocoder.reverse(this.state.marker, map.options.crs.scale(map.getZoom()), results => {
  //     const r = results[0]
  //     console.log(r)
  //   })
  // }



  render() {
    return (
      <Row>
        <Map center={this.props.center} zoom="15" ref={m => { this.leafletMap = m; }}>>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker
            draggable={this.state.draggable}
            onDragend={this.updatePosition}
            position={this.state.marker}
            ref={this.refmarker}>

          </Marker> */}
        </Map>
      </Row>
    );
  }
}

export default MapPlaceCreation;
