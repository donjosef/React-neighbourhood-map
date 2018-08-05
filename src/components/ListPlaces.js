import React, { Component } from 'react';
import foursquareAttributionUrl from '../imgs/powered-by-foursquare-white.png'

class ListPlaces extends Component {
    
    
    render() {
        const { places, onItemClick } = this.props;
        return (
            <div>
              <ul className='listPlaces'>
                  {places.map((place, idx) => (
                    <li key={place.venue.id} >
                       <button 
                        className='location-item'
                        onClick={() => onItemClick(idx, {lat: place.venue.location.lat, lng: place.venue.location.lng})}>{place.venue.name}
                       </button>
                     </li>
                    ))}
              </ul>
              <img src={foursquareAttributionUrl} className='foursquare-logo-list' alt='powered-by-foursquare'/>
            </div>
        )
    }
}

export default ListPlaces