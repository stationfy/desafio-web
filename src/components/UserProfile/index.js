import React from 'react';

import { Profile } from './styles';

export default function UserProfile() {
  return (
    <Profile>
      <img
        src="https://api.adorable.io/avatars/70/abott@adorable.png"
        alt="User"
      />
      <div>
        <strong>user name</strong>
        <p>nome e sobrenome</p>
      </div>
    </Profile>
  );
}
