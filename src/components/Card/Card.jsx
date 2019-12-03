import React from "react";

import User from "../User/User";
import Description from "../Description/Description";

import { Container } from "./Styles";

const Card = ({
  isRepo,
  repo: {
    full_name,
    description,
    owner: { login, avatar_url }
  }
}) => {
  return (
    <Container isRepo={isRepo}>
      <Description login={login} description={description} />
      <User fullName={full_name} login={login} avatarUrl={avatar_url} />
    </Container>
  );
};

export default Card;
