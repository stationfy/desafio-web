import React from "react";
import PropTypes from "prop-types";

import User from "../User/User";
import Description from "../Description/Description";

import { Container } from "./Styles";

const Card = ({
  isRepo,
  repo: {
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

Card.propTypes = {
  isRepo: PropTypes.func,
  repo: PropTypes.shape({
    full_name: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string
    })
  }).isRequired
};

export default Card;
