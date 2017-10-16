import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';
import Fork from 'react-icons/lib/fa/code-fork'
import Star from 'react-icons/lib/fa/star'
import {click} from '../../actions';
import {Link} from 'react-router';

const Repository = ({name, description, forks, stargazers_count, login, avatar_url, pulls_url, click}) => (
  <Link to="/pulls">
    <div className="Repository-wrapper" onClick={()=>click(name, login, true)}>
      <div className="Repository-infos">
	<div className="Repository-texts">
	  <p className="Repository-title">{name}</p>
	  <p className="Repository-description">{description}</p>
	</div>
	<div className="Repository-status">
	  <Fork color="#DE920C"/>
	  <p className="fork-number">{forks}</p>
	  <Star color="#DE920C" style={{marginLeft: 15}}/>
	  <p className="star-number">{stargazers_count}</p>
	</div>
      </div>
      <div className="Repository-user">
	<img 
	src={avatar_url}
	className="user-img"
	/>
	<p className="username">{login}</p>
	<p className="name"></p>
      </div>
    </div>
  </Link>
);

let mapStateToProps = (state) =>{
  return {
    list: state
  }
}

export default connect(mapStateToProps, {click})( Repository);
