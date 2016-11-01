import React, {Component}                     from 'react';
import {GoogleMapLoader, GoogleMap, Marker}   from 'react-google-maps';



class Maps extends Component{

  render(){

    const markers = this.props.markers.map((venue, i)=>{
      const marker = {
        position: {
          lat: 40.7575285,
          lng: -73.9884469
        }
      }

      return <Marker key={i} {...marker} />
    })

    const mapContainer = <div style={{height: "100%", widht: '100%' }}> </div>

    return(
        <GoogleMapLoader
          containerElement = {mapContainer}
          googleMapElement = {
            <GoogleMap
              defaultZoom={15}
              defaultCenter={this.props.center}
              options={{streetViewControl: false, mapTypeControl: false}}
            >
            </GoogleMap>
          }/>
      )
  }
}

export default Maps;
