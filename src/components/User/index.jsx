import React from 'react';
import propTypes from './propTypes';

const User = (props) => {
  const { url, username } = props;
  return (
    <div>
      <img src={url} alt="" height="40px" />
      <p>
        {username}
      </p>
      {/* <p>
        Nome Sobrenome
      </p> */}
    </div>
  );
};

User.propTypes = {
  url: propTypes.url.isRequired,
  username: propTypes.username.isRequired,
};

export default User;
