import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Repository from './container/Repository'

import Menu from 'react-icons/lib/md/menu'
import Fork from 'react-icons/lib/fa/code-fork'
import Star from 'react-icons/lib/fa/star'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="icon-wrapper">
	    <Menu size="40"/>
          </div>
	  <div className="App-header-title">
	    <p>Github JavaPop</p>
	  </div>
	</div>
	<div className="App-body">
	  <Repository/>
        </div>
      </div>
    );
  }
}

export default App;
