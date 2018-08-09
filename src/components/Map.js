import React, { Component } from 'react';
import CompositeMap from './CompositeMap'
import Header from './Header'
import ErrorBoundary from './ErrorBoundary'

class Map extends Component {
    
    
   render() {
//       const { places, center, onMarkerClick, selectedIndex } = this.props; //from state of App.js
       return(
          <div className={'right-col ' + this.props.classOpen}>
           <Header onToggleMenu={this.props.onToggleMenu}/>
           <ErrorBoundary>
            <CompositeMap
              {...this.props}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCG9xm-5TaK3HboSGTh3u88xjgEDoVmUMM&v=3"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={ <main style={{ height: `calc(100vh - 80px)`}} role='application'/> }
              mapElement={ <div style={{ height: `100%` }} /> }
            />
           </ErrorBoundary>
          </div>
       );
   }
}

export default Map; 