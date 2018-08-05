import React, { Component } from 'react';
import CompositeMap from './CompositeMap'
import Header from './Header'

class Map extends Component {
    
   render() {
//       const { places, center, onMarkerClick, selectedIndex } = this.props; //from state of App.js
       return(
          <div className={'right-col ' + this.props.classOpen}>
           <Header onToggleMenu={this.props.onToggleMenu}/>
            <CompositeMap
              {...this.props}
              containerElement={ <main style={{ height: `calc(100vh - 80px)`}} /> }
              mapElement={ <div style={{ height: `100%` }} /> }
            />
          </div>
       );
   }
}

export default Map; 