import React, { Component } from "react";

import './PRListStatus.css';

class PRListStatus extends Component {

  render() {
    const openedprs = this.props.openedprs;
    const closedprs = this.props.closedprs;
    return (
      <div className="prliststatus content">
        <span className="prliststatus-block">
          <span className="prliststatus-opened">{ openedprs } opened </span> / { closedprs } closed 
        </span>
      </div>
    )
  }
}

export default PRListStatus