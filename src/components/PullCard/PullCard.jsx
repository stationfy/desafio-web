import React from "react";
import PropTypes from "prop-types";

import User from "../User/User";
import Description from "../Description/Description";
import formatDate from "../../utils/formatDate";

import { Container } from "./Styles";

const PullCard = ({
  pull: {
    html_url,
    title,
    body,
    updated_at,
    user: { login, avatar_url }
  }
}) => {
  return (
    <Container>
      <Description
        title={title}
        description={body}
        html_url={html_url}
        isPull
      />
      <p>{formatDate(updated_at)}</p>
      <User login={login} avatarUrl={avatar_url} isPull={true} />
    </Container>
  );
};

PullCard.propTypes = {
  pull: PropTypes.shape({
    html_url: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    updated_at: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string
    })
  }).isRequired
};

export default PullCard;
