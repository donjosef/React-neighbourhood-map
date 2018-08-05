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
        filterQuery: '',
        menuOpen: false
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

handleToggleMenu = () => {
    this.setState({
        menuOpen: !this.state.menuOpen
    })
}
  render() {
      const {filterQuery, places, menuOpen} = this.state;
      let showingPlaces;
      if(filterQuery) {
          const match = new RegExp(filterQuery, 'i');
          showingPlaces = places.filter(place => match.test(place.venue.name));
      } else {
          showingPlaces = places;
      }
      
      /*imitates the use of classList.toggle with js*/
      const classOpen = menuOpen ? 'open' : "";
      const classClosed = menuOpen ? "" : "closed";
      
      
    return (
      <div className="App">
        <nav className={'sideBar ' + classClosed}>
            <label >
             Filter Places:
                <input 
                  value={this.state.filterQuery} 
                  onChange={this.handleQueryChange} 
                  placeholder='Enter a place name' 
                  type='text'
                />
            </label>
            <ListPlaces places={showingPlaces} onItemClick={this.handleMarkerClick}/>
        </nav>
        <Map  
            classOpen={classOpen}
            onToggleMenu={this.handleToggleMenu}
            menuOpen={this.state.menuOpen}
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
