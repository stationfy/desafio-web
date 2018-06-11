import React, { Component } from "react";
import { Link } from 'react-router-dom';


import './RepoItem.css';

class RepoItem extends Component {

  render() {
    const data = { ...this.props.data };
    return (
      <div className="row repoitem">
        <div className="col-md-9 col-sm-9 row flex-column">
          <Link to={`/pr-list?q=${data.full_name}`}>
            <p className="repoitem-title">{ data.name }</p>
          </Link>
          <div className="text ellipsis">
            <span className="repoitem-description">{ data.description }</span>
          </div>
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
        <div className="col-md-3 col-sm-3 repoitem-avatar-block">
          <div className="repoitem-user">
            <img className="repoitem-user-img" src={ data.owner.avatar_url } alt={ data.name }/>
          </div>
          <p className="repoitem-name">{ data.name }</p>
          <p className="repoitem-fullname">{ data.full_name }</p>
        </div>
      </div>
    )
  }
}

export default RepoItem
