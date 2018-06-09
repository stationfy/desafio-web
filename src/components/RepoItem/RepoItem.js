import React, { Component } from "react";
import fetch from 'node-fetch';
import { Link } from 'react-router-dom';

import './RepoItem.scss';

class RepoItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = { ...this.props.data };
    return (
      <div className="row">
        <div className="col-xs-8">
          <Link to={`/pr-list?q=${data.full_name}`}>
            <p className="repoitem-title">{ data.name }</p>
          </Link>
          <p className="repoitem-description">{ data.description }</p>
          <div className="repoitem-rating-block">
            <span className="repoitem-fork">
              <i className="fa fa-code-fork" aria-hidden="true"></i>
              <span className="repoitem-fork-number">{ data.forks_count }</span>
            </span>
            <span className="repoitem-starsgazers">
              <i className="fa fa-star" aria-hidden="true"></i>
              <span className="repoitem-starsgazers-number">{ data.stargazers_count }</span>
            </span>
          </div>
        </div>
        <div className="col-xs-3">
          <img className="" src={ data.owner.avatar_url } />
          <p className="repoitem-name">{ data.name }</p>
          <p className="repoitem-fullname">{ data.full_name }</p>
        </div>
      </div>
    )
  }
}

export default RepoItem
