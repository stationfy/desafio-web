import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import { GoRepoForked, GoStar } from 'react-icons/go'

import { Container, RepoInfo, UserInfo } from "./Styles";

const Card = ({
  repo: {
    full_name,
    name,
    description,
    owner: { login, avatar_url },
    stargazers_count,
    forks_count
  }
}) => {
  return (
    <Container>
      <RepoInfo>
        <Link to={`/${login}/${name}`}>{name}</Link>
        <p>{description}</p>
        <div>
          <div>
            <GoStar size={20} />
            <span>{stargazers_count}</span>
          </div>
          <div>
            <GoRepoForked size={20} />
            <span>{forks_count}</span>
          </div>
        </div>
      </RepoInfo>
      <UserInfo>
        <img src={avatar_url} alt={`${login} avatar`} />
        <span>{login}</span>
        <p>{full_name}</p>
      </UserInfo>
    </Container>
  );
};

Card.propTypes = {
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
