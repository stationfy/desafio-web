import React, { Component } from "react";
import fetch from 'node-fetch';

import './PRItem.scss';

class PRItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = { ...this.props.data };
    return (
      <div className="row">
        <div className="col-xs-12">
          <p className="repoitem-name">{ data.title }</p>
          <p className="pritem-body">{ data.body }</p>
        </div>
        <div className="col-xs-6">
          <img className="" src={ data.user.avatar_url } />
          <div className="pritem-user">
            <p className="repoitem-name">{ data.user.login }</p>
            <p className="repoitem-fullname">{ data.full_name }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PRItem