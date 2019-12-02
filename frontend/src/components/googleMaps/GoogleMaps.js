import React, { Component } from 'react'
import { connect } from 'react-redux';
import { GoogleMap, Marker } from '@react-google-maps/api'
import { mapOptions } from './mapOptions';

class GoogleMaps extends Component {

state = {};

  render() {

    return (

      <GoogleMap
        id='example-map'
        mapContainerStyle={{
          height: this.props.height,
          width: this.props.width
        }}
        zoom={15}
        center={{
          lat: this.props.latitude,
          lng: this.props.longitude
        }}
        options={mapOptions}
        
      >
        <Marker
          position={{
            lat: this.props.latitude,
            lng: this.props.longitude
          }}
        />


      </GoogleMap>


    )
  }
  
}


function mapStateToProps(state) {

  return { 
    latitude: state.accommodation.lat,
    longitude: state.accommodation.lng,
   };

}


export default connect(mapStateToProps)(GoogleMaps);