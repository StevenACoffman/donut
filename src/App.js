import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rotate from './Rotate'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Donutland. Go donuts!🍩</h2>
          <Rotate>🍩</Rotate>
        </div>
      </div>
    );
  }
}

export default App;
