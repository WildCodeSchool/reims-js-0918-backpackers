import React, { Component, Fragment } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { Row } from "reactstrap"

import "./Maps.scss"
import PlaceThumbnail from './HomePage/PlaceThumbnail';

const MyPopupMarker = ({ content, position, getMarkerInfos }) => (
  content ?
    <Marker onClick={() => getMarkerInfos(content)} position={position} />
    :
    <Marker position={position} />
)

const MyMarkersList = ({ markers, getMarkerInfos }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} getMarkerInfos={getMarkerInfos} />
  ))
  return <Fragment>{items}</Fragment>
}


class Maps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markerInfos: {},
      markers: [
        { key: 'myPosition', position: this.props.map }
      ],
    }
    this.getMarkerInfos = this.getMarkerInfos.bind(this)
    this.resetMarkerInfos = this.resetMarkerInfos.bind(this)

  }

  getMarkerInfos(content) {
    this.setState({ markerInfos: content })
  }

  resetMarkerInfos() {
    console.log('lol')
    this.setState({ markerInfos: {} })
  }

  render() {
    const markers = this.props.places.map(place => ({ key: place.name, position: [place.latitude, place.longitude], content: place }))


    return (
      <Row>
        <Map center={this.props.map} zoom="15" onClick={() => this.resetMarkerInfos()}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyMarkersList markers={[{ key: 'myPosition', position: this.props.map }, ...markers]} getMarkerInfos={this.getMarkerInfos} />

        </Map>
        {this.state.markerInfos.name ?
          <div className="mapPopup">
            <PlaceThumbnail {...this.state.markerInfos} />
          </div>
          : ""
        }
      </Row>

    )
  }
}

export default Maps