import React, { Component } from 'react';
import './index.css';
import Fork from 'react-icons/lib/fa/code-fork'
import Star from 'react-icons/lib/fa/star'

const Repository = ({repoName, repoDesc, forkNumber, starNumber, ownerName, ownerUsername, avatarUrl}) => (
  <div className="Repository-wrapper">
    <div className="Repository-infos">
      <div className="Repository-texts">
	<p className="Repository-title">{repoName}</p>
	<p className="Repository-description">{repoDesc}</p>
      </div>
      <div className="Repository-status">
	<Fork color="#DE920C"/>
	<p className="fork-number">{forkNumber}</p>
	<Star color="#DE920C" style={{marginLeft: 15}}/>
	<p className="star-number">{starNumber}</p>
      </div>
    </div>
    <div className="Repository-user">
      <img 
	src={avatarUrl}
	className="user-img"
      />
      <p className="username">{ownerUsername}</p>
      <p className="name">{ownerName}</p>
    </div>
  </div>
);

export default Repository;
