import React from "react";
import PropTypes from "prop-types";

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

User.propTypes = {
  isPull: PropTypes.bool,
  avatarUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string,
  login: PropTypes.string.isRequired
};

export default User;
