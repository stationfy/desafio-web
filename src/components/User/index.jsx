import React from 'react';

// propTypes
import propTypes from './propTypes';

const User = ({ url, username }) => (
  <div>
    <img
      src={url}
      alt={`Img for ${username} repository`}
      height="40px"
    />
    <p>
      {username}
    </p>
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
