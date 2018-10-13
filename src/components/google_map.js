import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends Component {
render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ {lat:this.props.lat, lng: this.props.lon} }
          defaultZoom={ 12 }>
        </GoogleMapReact>
      </div>
    )
  }
}