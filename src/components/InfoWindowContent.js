import React, { Component } from 'react'
import * as PlacesDataAPI from '../PlacesDataAPI'
import foursquareAttributionUrl from '../imgs/powered-by-foursquare-blue.png'




class InfoWindowContent extends Component {
    state = {
        loaded: false,
        error: false,
        selectedPlace: {}
    }


//this component is mounted after the click on marker. See CompositeMap (the condition index === selectedIndex)
componentDidMount() {
    
    //make a call to foursquare, pass in the id of the specific place, and wait for response.
    PlacesDataAPI.getDetails(this.props.id)
    .then(data => {
        console.log(data)
        if(data !== undefined && data.meta.code === 200) {
            this.setState({
                loaded: true,
                selectedPlace: data.response.venue
            });
        } else {
            this.setState({
                error: true
            })
        }
    })
    .catch(err => console.warn(err))
}

    render() {
        const { loaded, selectedPlace, error } = this.state;
        
    
        return ( 
            <div className='iw-content'>
            {loaded && selectedPlace && (
             <div>
               <h3>
                <strong>Venue</strong>: 
                <a href={`${selectedPlace.canonicalUrl}?ref=J3L43YMINNBWA0T4NKNPDOBRCTOPZL3XXZ052DDQVEDWLRKG`} 
                   target='_blank'>
                    {selectedPlace.name}
                </a>
               </h3>
              {selectedPlace.location.city && <p><strong>City</strong>: {selectedPlace.location.city}</p>}
               <p><strong>Latitude</strong>: {selectedPlace.location.lat}</p>
               <p><strong>Longitude</strong>: {selectedPlace.location.lng}</p>
               <p><strong>Rating</strong>: {selectedPlace.rating}</p>
               <img src={foursquareAttributionUrl} className='foursquare-logo-details' alt='powered-by-foursquare' />
             </div>
            )}
            {error && <p style={{color: 'red'}}><strong>Something went wrong. Cannot load any place</strong></p>}
             
             
            </div>
    
    
        )
    
    }
}
export default InfoWindowContent