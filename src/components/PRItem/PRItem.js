import React, { Component } from "react";

import './PRItem.css';

class PRItem extends Component {

  render() {
    const data = { ...this.props.data };
    const full_name = { ...this.props.fullName };
    return (
      <div className="row pritem flex-column">
        <div className="col-xs-12">
          <a href={ data.html_url } target="_blank" className="pritem-name">{ data.title }</a>
          <div className="text ellipsis">
            <span className="pritem-body">{ data.body }</span>
          </div>
        </div>
        <div className="col-xs-9 row pritem-user-data">
          <div className="pritem-user">
            <img className="pritem-user-img" src={ data.user.avatar_url } alt={ data.user.login }/>
          </div>
          <div className="pritem-user-block flex-column">
            <p className="pritem-username">{ data.user.login }</p>
            <p className="pritem-fullname">{ full_name.q }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PRItem