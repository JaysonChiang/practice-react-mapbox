import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { token } from './credential';

class App extends Component {

  componentDidMount() {
    mapboxgl.accessToken = token;

    new mapboxgl.Map({
      container: this.mapContainer, //'<your HTML element id>',
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  render() {
    const divStyle = {
      height: '400px',
      width: '400px'
    }
    return (
      <div className="App">
        <div ref={el => this.mapContainer = el} style={divStyle}></div>
      </div>
    );
  }
}

export default App;
