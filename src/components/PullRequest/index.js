import React from "react";
import PropTypes from "prop-types";

import { Container } from "./Styles";

const handleDescription = (description) => !description ? "No description provided" : description.substring(0, 240) + '...';

const PullCard = ({
  pull: {
    title,
    body,
    user: { login, avatar_url }
  }
}) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{handleDescription(body)}</p>
      <div>
        <img src={avatar_url} alt={`${login} avatar`} />
        <span>{login}</span>
      </div>
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
