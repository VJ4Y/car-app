import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarList from './components/CarList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Car List</h1>
        <CarList/>
        </header>
      </div>
    );
  }
}

export default App;
