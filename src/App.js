import React, {Component} from 'react';
import ReactGA from 'react-ga';
import logo from './logo.svg';
import './App.css';
import CarList from './components/CarList.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function initializeReactGA() {
 ReactGA.initialize('UA-133103090-1');
 ReactGA.pageview('/');
} 

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppBar position="static" style={{backgroundColor:"#282c34"}}>
      <Toolbar>Car List</Toolbar>
      </AppBar>
        <CarList />
      </div>
    );
  }
}

export default App;
