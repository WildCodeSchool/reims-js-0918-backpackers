import React, { Component, Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Row } from "reactstrap"

import "./Maps.scss"

const MyPopupMarker = ({ content, position }) => (
  <Marker position={position}>
    {content ? <Popup>{content}</Popup> : ""}
  </Marker>
)

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <Fragment>{items}</Fragment>
}

class Maps extends Component {
  state = {
    markers: [
      { key: 'marker1', position: this.props.map },
      { key: 'marker2', position: [49.259705, 4.020208], content: 'My second popup' },
      { key: 'marker3', position: [49.259273, 4.017972], content: 'My third popup' },
    ],
  }
  render() {

    return (
      <Row>
        <Map center={this.props.map} zoom="15">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyMarkersList markers={this.state.markers} />
        </Map>
      </Row>

    )
  }
}

export default Maps