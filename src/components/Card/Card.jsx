import React from "react";

import User from "../User/User";
import Description from "../Description/Description";

import { Container } from "./Styles";

const Card = ({
  isRepo,
  repo: {
    id,
    full_name,
    name,
    description,
    owner: { login, avatar_url }
  }
}) => {
  return (
    <Container isRepo={isRepo}>
      <Description name={name} title={login} description={description} />
      <User
        fullName={full_name}
        login={login}
        avatarUrl={avatar_url}
        isRepo={isRepo}
      />
    </Container>
  );
};

export default Card;
