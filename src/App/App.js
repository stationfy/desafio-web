import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home/Home';
import PRList from '../PRList/PRList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/pr-list' component={PRList}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
