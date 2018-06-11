import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {

  renderHeader(reponame) {
    if(!reponame) {
      return (
        <div className="header-title-block">
          <i className="fa fa-bars" aria-hidden="true" onClick={ () => { alert(`A menu here, soon...`) } }></i>
          <span className="header-title">Github JavaPop</span>
        </div>
      )
    } else {
      return (
        <div className="header-title-block">
          <Link to="/">
            <i className="fa fa-arrow-left header-back" aria-hidden="true"></i>
          </Link>
          <span className="header-title"> { reponame } </span>
        </div>
      )
    }
  }

  render() {
    const reponame = this.props.reponame;
    return (
      <div className="header content">
        { this.renderHeader(reponame) }
      </div>
    )
  }
}

export default Header