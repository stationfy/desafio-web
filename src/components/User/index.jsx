import React from 'react';

// propTypes
import propTypes from './propTypes';

const User = ({ url, username }) => (
  <div className="user-profile">
    <div className="user-profile__header">
      <img
        alt={`Img for ${username} repository`}
        className="user-profile__header--img"
        src={url}
      />
    </div>
    <div className="user-profile__body">
      <a className="user-profile__body--text" href={`https://github.com/${username}`}>
        {username}
      </a>
    </div>
    {/* <p>
      Nome Sobrenome
    </p> */}
  </div>
);

User.propTypes = {
  url: propTypes.url.isRequired,
  username: propTypes.username.isRequired,
};

export default User;
