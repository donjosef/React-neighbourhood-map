import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './components/Map'
import * as PlacesDataAPI from './PlacesDataAPI'
import './App.css';

class App extends Component {
    state = {
        places: [], 
        center: { lat: 40.78448, lng: 17.23618 }, //the initial center of the map
        selectedIndex: null,
        
    }

componentDidMount() {
   PlacesDataAPI.getPlaces()
    .then(data => {
       const places = data.response.groups[0].items;
       this.setState({ places });
   })
}

handleGetDetails = (id) => {
    PlacesDataAPI.getDetails(id)
    .then(data => console.log(data))
}

//when a marker is clicked, its  position is used to center the map to the new marker, and selectIndex is used to make sure the infoWindow is open on the right Marker
handleMarkerClick = (idx, position) => {
    console.log(idx, position)
    this.setState({
        center: position,
        selectedIndex: idx
    })
}

// Reset to null, otherwise the infowindow, if closed, will not open again on the same marker 
handleCloseWindow = () => {
    this.setState({
        selectedIndex: null
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
            closeWindow={this.handleCloseWindow}
            onGetDetails={this.handleGetDetails}
            
        />
      </div>
    );
  }
}

export default App;
