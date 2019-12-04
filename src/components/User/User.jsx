import React from "react";

import { Container } from "./Styles";

const User = ({ isPull, avatarUrl, fullName, login }) => {
  return (
    <Container isPull={isPull}>
      <img src={avatarUrl} alt={`${login} avatar`} />
      <div>
        <span>{login}</span>
        <p>{fullName}</p>
      </div>
    </Container>
  );
};

export default User;
