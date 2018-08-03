import React, {Component} from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const CompositeMap = withGoogleMap(props => { 
    const { places, center, onMarkerClick, selectedIndex } = props;
    
     return (
          <GoogleMap
            center = { center }
            defaultZoom = { 9 }
          >
            {places.map((place, index) => (
              <Marker 
                onClick={ () => onMarkerClick(index, {lat: place.venue.location.lat, lng: place.venue.location.lng}) }
                key={place.venue.id} 
                position={{
                    lat: place.venue.location.lat,
                    lng: place.venue.location.lng 
                }}
              >
                {index === selectedIndex && (
                    <InfoWindow 
                        position={{
                            lat: place.venue.location.lat, 
                            lng: place.venue.location.lng
                        }}>

                        <h1>Content</h1>
                   </InfoWindow>
                 )}

              </Marker>     

            ))}

          </GoogleMap>
     )
     
     
     
});

export default CompositeMap
