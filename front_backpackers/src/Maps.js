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
      { key: 'marker1', position: this.props.map }
    ],
  }

  componentDidMount() {
  }

  render() {
    const markers = this.props.places.map(place => ({ key: place.name, position: [place.latitude, place.longitude], content: place.name }))


    return (
      <Row>
        <Map center={this.props.map} zoom="15">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyMarkersList markers={[{ key: 'marker1', position: this.props.map }, ...markers]} />
        </Map>
      </Row>

    )
  }
}

export default Maps