import React, { Component } from 'react';
import CompositeMap from './CompositeMap'
import Header from './Header'

class Map extends Component {
    
   render() {
//       const { places, center, onMarkerClick, selectedIndex } = this.props; //from state of App.js
       const className = this.props.menuOpen ? 'map-md' : 'map-lg'
       return(
          <div className={className}>
           <Header onToggleMenu={this.props.onToggleMenu}/>
            <CompositeMap
              {...this.props}
              containerElement={ <main style={{ height: `100vh`}} /> }
              mapElement={ <div style={{ height: `100%` }} /> }
            />
          </div>
       );
   }
}

export default Map; 