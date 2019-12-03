import React from "react";

import { Container } from "./Styles";

const User = ({ isRepo, avatarUrl, fullName, login }) => {
  return (
    <Container isRepo={isRepo}>
      <img src={avatarUrl} alt={`${fullName} avatar`} />
      <div>
        <a href="git">{login}</a>
        <p>{fullName}</p>
      </div>
    </Container>
  );
};

export default User;
