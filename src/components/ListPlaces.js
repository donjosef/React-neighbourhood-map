import React, { Component } from 'react';

class ListPlaces extends Component {
    
    
    render() {
        const { places, onItemClick } = this.props;
        return (
            <div className='sideBar'>
               <div className='filterBarContainer'>
                <label className='labelForFilter'>
                 Filter Places you are interested in:
                 <input className='filterBar' type='text'/>
                </label>
               </div>
               <nav>
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
               </nav>
            </div>
        
        
        )
    }
}

export default ListPlaces