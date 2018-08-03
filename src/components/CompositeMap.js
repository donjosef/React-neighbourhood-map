import React from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const CompositeMap = withGoogleMap(props => { 
    const { places, center, onMarkerClick, selectedIndex, closeWindow, onGetDetails} = props;
    
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
                onClick={ () => {
                    onMarkerClick(index, {lat: place.venue.location.lat, lng: place.venue.location.lng})
                    onGetDetails(place.venue.id)
                }}
                
              >
                {index === selectedIndex && (
                    <InfoWindow 
                        position={{
                            lat: place.venue.location.lat, 
                            lng: place.venue.location.lng
                        }}
                        onCloseClick={closeWindow}>

                        <h1>Content</h1>
                   </InfoWindow>
                 )}

              </Marker>     

            ))}

          </GoogleMap>
     )
     
     
     
});

export default CompositeMap
