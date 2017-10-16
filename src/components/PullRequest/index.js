import React, { Component } from 'react';
import './index.css';

const PullRequest = ({title, body, login, avatar_url, pulls_url, html_url}) => (
  <div className="PullRequest-wrapper" onClick={()=>window.location = html_url}>
    <div className="PullRequest-infos">
      <div className="PullRequest-texts">
	<p className="PullRequest-title">{title}</p>
	<p className="PullRequest-description">{body}</p>
      </div>
      <div className="PullRequest-user">
	<img 
	src={avatar_url}
	className="user-img"
	/>
	<p className="username">{login}</p>
	<p className="name"></p>
      </div>
    </div>
  </div>
);

export default PullRequest;
