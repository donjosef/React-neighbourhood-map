import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './components/Map'
import './App.css';

class App extends Component {
    state = {
        places: []
    }

componentDidMount() {
    fetch(`https://api.foursquare.com/v2/venues/explore?near=alberobello,it&radius=50000&section=outdoors&limit=30&client_id=U1CLJ2FKP15TX4EIZEDOZSVJC2KJPKT4OBNEI3UDJRIINDCO&client_secret=CQF2S3FBWYRFED4RO0QUYLO4JH0TXUJ5PFK2F2OS1PJF1FA5&v=20180801`)
    .then(res => res.json())
    .then(data => {
        const places = data.response.groups[0].items;
        this.setState({ places })
        
    })
}

  render() {
    return (
      <div className="App">
     
        <Map places={this.state.places}/>
      </div>
    );
  }
}

export default App;
