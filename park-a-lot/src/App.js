import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import ParkNavbar from './Navbar.js';
import {EmptyMapShell, GoogleMap} from './GMap.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ParkNavbar/>
        <EmptyMapShell/>
        <GoogleMap/>
        </div>
    );
  }
}

export default App;
