import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './components/Map'
import './App.css';

class App extends Component {
    state = {
        places: [], 
        center: { lat: 40.78448, lng: 17.23618 }, //the initial center of the map
        selectedIndex: null,
        
    }

componentDidMount() {
    fetch(`https://api.foursquare.com/v2/venues/explore?near=alberobello,it&radius=50000&section=outdoors&limit=30&client_id=U1CLJ2FKP15TX4EIZEDOZSVJC2KJPKT4OBNEI3UDJRIINDCO&client_secret=CQF2S3FBWYRFED4RO0QUYLO4JH0TXUJ5PFK2F2OS1PJF1FA5&v=20180801`)
    .then(res => res.json())
    .then(data => {
        const places = data.response.groups[0].items;
        this.setState({ places })
        
    })
}

//when a marker is clicked, its  position is used to center the map to the new marker, and selectIndex is used to make sure the infoWindow is open on the right Marker
handleMarkerClick = (idx, position) => {
    console.log(idx, position)
    this.setState({
        center: position,
        selectedIndex: idx
    })
}
  render() {
    return (
      <div className="App">
     
        <Map  
            selectedIndex={this.state.selectedIndex}
            onMarkerClick={this.handleMarkerClick}
            center={this.state.center}
            places={this.state.places} 
            
        />
      </div>
    );
  }
}

export default App;
