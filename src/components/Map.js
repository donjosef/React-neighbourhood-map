import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
   render() {
    const { places } = this.props;
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: 17.954298 } }
        defaultZoom = { 8 }
      >
        {places.map(place => (
          <Marker 
            key={place.venue.id} 
            position={{
                lat: place.venue.location.lat,
                lng: place.venue.location.lng 
            }}/>
    
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