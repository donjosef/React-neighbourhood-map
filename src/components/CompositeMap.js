import React from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import InfoWindowContent from './InfoWindowContent'

const CompositeMap = withGoogleMap(props => { 
    const { places, center, onMarkerClick, selectedIndex, closeWindow} = props;
    
     return (
          <GoogleMap
            center = { center }
            defaultZoom = { 9 }
          >
            {places.map((place, index) => (
              <Marker 
                key={place.venue.id} 
                position={{
                    lat: place.venue.location.lat,
                    lng: place.venue.location.lng 
                }}
                onClick={ () => onMarkerClick(index, {lat: place.venue.location.lat, lng: place.venue.location.lng})}
                animation= {window.google.maps.Animation.DROP }
                
              >
                {index === selectedIndex && (
                    <InfoWindow 
                        position={{
                            lat: place.venue.location.lat, 
                            lng: place.venue.location.lng
                        }}
                        onCloseClick={closeWindow}>

                        <InfoWindowContent id={place.venue.id}/>
                   </InfoWindow>
                 )}

              </Marker>     

            ))}

          </GoogleMap>
     )
     
     
     
});

export default CompositeMap
