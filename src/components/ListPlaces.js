import React, { Component } from 'react';

class ListPlaces extends Component {
    
    
    render() {
        const { places, onItemClick } = this.props;
        return (
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
        )
    }
}

export default ListPlaces