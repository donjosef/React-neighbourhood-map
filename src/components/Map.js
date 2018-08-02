import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class Map extends Component {
   render() {
    const { places, center } = this.props;
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { center }
        defaultZoom = { 9 }
      >
        {places.map(place => (
          <Marker 
            key={place.venue.id} 
            position={{
                lat: place.venue.location.lat,
                lng: place.venue.location.lng 
            }}
          >
       
        
        </Marker>
        
    
        ))}
        
      </GoogleMap>
    ));
    return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
   }
}

export default Map;