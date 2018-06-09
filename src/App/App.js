import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import './App.scss';
// import * as $ from 'jquery'
// import Tether from 'tether'
// import Popper  from 'popper'
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home/Home';
import PRList from '../PRList/PRList';
import { Switch, Route } from 'react-router-dom';
// Jquery setup for bootstrap v4

// window.jQuery = window.$ = $

// //tether is a requirement for bootstrap v4

// window.Tether = Tether

// //popper.js is a requirement for bootstrap v4

// window.Popper = Popper



class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/pr-list' component={PRList}/>
      </Switch>
    );
  }
}

export default App;
