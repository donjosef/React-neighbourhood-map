import React, { Component } from 'react'
import * as PlacesDataAPI from '../PlacesDataAPI'

class InfoWindowContent extends Component {
    state = {
        loaded: false,
        error: false,
        selectedPlace: {}
    }


//this component is mounted after the click on marker. See CompositeMap around line 23
componentDidMount() {
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
            <div>
            {loaded && selectedPlace && (
             <div>
              <img src={`${selectedPlace.bestPhoto.prefix}width500${selectedPlace.bestPhoto.suffix}`} />
               <h3>
                <strong>Venue</strong>: 
                <a href={`${selectedPlace.canonicalUrl}?ref=U1CLJ2FKP15TX4EIZEDOZSVJC2KJPKT4OBNEI3UDJRIINDCO`} 
                   target='_blank'>
                    {selectedPlace.name}
                </a>
               </h3>
              {selectedPlace.location.city && <p><strong>City</strong>: {selectedPlace.location.city}</p>}
               <p><strong>Latitude/Longitude</strong>: {selectedPlace.location.lat}-{selectedPlace.location.lng}</p>
               <p><strong>Rating</strong>: {selectedPlace.rating}</p>
             </div>
            )}
            {error && <p style={{color: 'red'}}><strong>Cannot load any place</strong></p>}
             
             
            </div>
    
    
        )
    
    }
}
export default InfoWindowContent