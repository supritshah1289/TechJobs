import React, {Component}                     from 'react';
import {GoogleMapLoader, GoogleMap, Marker}   from 'react-google-maps';



class Maps extends Component{

  constructor(){
    super();
    this.state = {
      loc:{
        lat: 40.7179834,
        lng: -74.1373194
      }
    }
  }


  render(){

    const markers = this.props.markers.map((venue, i)=>{

      const marker = {
        position: {
          lat: typeof(parseFloat(venue.company.location.lat)) === 'number' ? parseFloat(venue.company.location.lat) : console.log('err'),
          lng: typeof(parseFloat(venue.company.location.lng)) === 'number' ? parseFloat(venue.company.location.lng) : console.log('err')
        }
      }

      return <Marker key={i} {...marker} />
    })


    const mapContainer = <div style={{height: "100%", widht: '100%' }}> </div>

    return(
        <GoogleMapLoader
          containerElement={mapContainer}

          googleMapElement={
            <GoogleMap
              defaultZoom={15}
              defaultCenter={this.state.loc}
              options={{streetViewControl: false, mapTypeControl: false}}
            >
              {markers}
            </GoogleMap>
          }/>
      )
  }
}

export default Maps;
