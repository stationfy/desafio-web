import React from 'react';
import PropTypes from 'prop-types';

import { Profile } from './styles';

export default function UserProfile({ avatarUrl, name }) {
  return (
    <Profile container>
      <img src={avatarUrl} alt="User" />
      <div>
        <strong>{name}</strong>
      </div>
    </Profile>
  );
}

UserProfile.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
