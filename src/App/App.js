import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home/Home';
import PRList from '../PRList/PRList';
import { Switch, Route } from 'react-router-dom';

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
