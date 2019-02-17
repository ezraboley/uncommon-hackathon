import React, { Component } from 'react';

import './App.css';
import ParkNavbar from './Navbar.js';
import {EmptyMapShell, GoogleMap} from './GMap.js';
import ParkingSpot from "./Parking.js";

class App extends Component {
  render() {
    return (
      <div style={{position: "absolute", height: "100%", width: "100%"}} className="App">
            <ParkNavbar/>
            <EmptyMapShell/>
            <GoogleMap/>
            <ParkingSpot/>
        </div>
    );
  }
}

export default App;
