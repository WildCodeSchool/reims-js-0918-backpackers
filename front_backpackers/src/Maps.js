import React, { Component, Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Row } from "reactstrap"

import "./Maps.scss"
import PlaceThumbnail from './HomePage/PlaceThumbnail';

const MyPopupMarker = ({ content, position, getMarkerInfos }) => (
  <Marker onClick={() => getMarkerInfos} position={position}>{console.log("hello", content)}
    {content ? <Popup>{content.name}</Popup> : ""}
  </Marker>
)

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <Fragment>{items}</Fragment>
}


class Maps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markerInfos: {},
      markers: [
        { key: 'marker1', position: this.props.map }
      ],
    }
    this.getMarkerInfos = this.getMarkerInfos.bind(this)

  }

  getMarkerInfos(content) {
    console.log("lol", content)
    this.setState({ markerInfos: content })
  }

  render() {
    const markers = this.props.places.map(place => ({ key: place.name, position: [place.latitude, place.longitude], content: place }))


    return (
      <Row>
        <Map center={this.props.map} zoom="15">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyMarkersList markers={[{ key: 'marker1', position: this.props.map }, ...markers]} />
          {this.state.markerInfos.name ?
            <div className="mapPopup">
              <PlaceThumbnail {...this.state.markerInfos} />
            </div>
            : ""
          }
        </Map>
      </Row>

    )
  }
}

export default Maps