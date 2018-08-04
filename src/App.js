import React, { Component } from 'react';
import Map from './components/Map'
import ListPlaces from './components/ListPlaces'
import * as PlacesDataAPI from './PlacesDataAPI'
import './App.css';

class App extends Component {
    state = {
        places: [], 
        center: { lat: 40.78448, lng: 17.23618 }, //the initial center of the map
        selectedIndex: null,
        filterQuery: ''
    }

componentDidMount() {
   PlacesDataAPI.getPlaces()
    .then(data => {
       const places = data.response.groups[0].items;
       this.setState({ places });
   })
}

handleQueryChange = (e) => {
    this.setState({
        filterQuery: e.target.value
    })
}


//when a marker is clicked, its  position is used to center the map to the new marker, and selectIndex is used to make sure the infoWindow is open on the right Marker. The same functionality is applied to list items when clicked
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
      const {filterQuery, places} = this.state;
      let showingPlaces;
      if(filterQuery) {
          const match = new RegExp(filterQuery, 'i');
          showingPlaces = places.filter(place => match.test(place.venue.name));
      } else {
          showingPlaces = places;
      }
      
    return (
      <div className="App">
        <nav className='sideBar'>
          <label >
             Filter Places you are interested in:
             <input value={this.state.filterQuery} onChange={this.handleQueryChange} type='text'/>
          </label>
          <ListPlaces places={showingPlaces} onItemClick={this.handleMarkerClick}/>
        </nav>
        <Map  
            selectedIndex={this.state.selectedIndex}
            onMarkerClick={this.handleMarkerClick}
            center={this.state.center}
            places={showingPlaces} 
            closeWindow={this.handleCloseWindow}
            
        />
      </div>
    );
  }
}

export default App;
