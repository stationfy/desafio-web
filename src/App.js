import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Menu from 'react-icons/lib/md/menu'
import Arrow from 'react-icons/lib/md/arrow-back'
import {click} from './actions';
import {Link} from 'react-router';

class App extends Component {

  renderHeader(){
    if(this.props.list.pulls){
      return(
	<div className="App-header">
	  <div className="icon-wrapper">
	    <Link to="/">
	      <Arrow size="35" onClick={()=>this.props.click('', '', false)}/>
	    </Link>
	  </div>
	  <div className="App-header-title">
	    <p>{this.props.list.project}</p>
	  </div>
	</div>
      );
    }
    else{
      return(
	<div className="App-header">
	  <div className="icon-wrapper">
	    <Menu size="35"/>
	  </div>
	  <div className="App-header-title">
	    <p>Github JavaPop</p>
	  </div>
	</div>
      );
    }
  }

  render() {
    return (
      <div className="App">
	{this.renderHeader()}
	<div className="App-body">
	  {this.props.children}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) =>{
  return {
    list: state
  }
}

export default connect(mapStateToProps, {click})(App);
