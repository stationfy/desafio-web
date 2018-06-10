import React, { Component } from "react";
import fetch from 'node-fetch';

import './PRItem.css';

class PRItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = { ...this.props.data };
    const full_name = { ...this.props.fullName };
    return (
      <div className="row pritem">
        <div className="col-xs-12">
          <p className="pritem-name">{ data.title }</p>
          <p className="pritem-body">{ data.body }</p>
        </div>
        <div className="col-xs-6 row">
          <div className="pritem-user">
            <img className="pritem-user-img" src={ data.user.avatar_url } />
          </div>
          <div className="pritem-user-block">
            <p className="pritem-username">{ data.user.login }</p>
            <p className="pritem-fullname">{ full_name.q }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PRItem