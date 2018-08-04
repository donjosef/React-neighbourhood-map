import React, { Component } from 'react';
import foursquareAttributionUrl from '../imgs/powered-by-foursquare-blue.png'

class ListPlaces extends Component {
    
    
    render() {
        const { places, onItemClick } = this.props;
        return (
            <div>
              <ul className='listPlaces'>
                  {places.map((place, idx) => (
                    <li 
                       key={place.venue.id} 
                       onClick={() => onItemClick(idx, {lat: place.venue.location.lat, lng: place.venue.location.lng})}
                      >
                       {place.venue.name}
                     </li>
                    ))}
              </ul>
              <img src={foursquareAttributionUrl} className='foursquare-logo-list'/>
            </div>
        )
    }
}

export default ListPlaces