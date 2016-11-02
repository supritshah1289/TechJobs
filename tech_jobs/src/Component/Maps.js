import React, {Component}                     from 'react';
import {GoogleMapLoader, GoogleMap, Marker}   from 'react-google-maps';



class Maps extends Component{

  render(){

    const markers = this.props.markers.map((venue, i)=>{

      const marker = {
        position: {
          lat: typeof(parseInt(venue.company.location.lat)) == 'number' ? parseInt(venue.company.location.lat) : console.log('err'),
          lng: typeof(parseInt(venue.company.location.lng)) == 'number' ? parseInt(venue.company.location.lng) : console.log('err')
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
              {markers}
            </GoogleMap>
          }/>
      )
  }
}

export default Maps;
