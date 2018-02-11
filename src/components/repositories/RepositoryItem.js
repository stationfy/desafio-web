import React from "react";
import Fork from "react-icons/lib/fa/code-fork";
import Star from "react-icons/lib/fa/star";

import { Link } from 'react-router';

import styled from "styled-components";

const RepositoryItemWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid #bbb;
`;

const RepositoryDetails = styled.div`
  display: flex;
  flex: 2;
  flex-wrap: wrap;
  align-items: left;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 10px;
`;

const RepositoryUserDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h1`
  color: #0366d6;
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 14px;
  color: #586069;
  width: 100%;
  white-space: wrap;
`;

const Status = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

const StatusText = styled.p`
  color: #de920c;
  font-size: 14px;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const Username = styled.p`
  color: black;
  font-size: 15px;
  line-height: 0px;
`;

const RepositoryItem = props => {
  const { name, description, stargazers_count, forks_count } = props.repository;
  const { avatar_url, login } = props.repository.owner;

  return (
    <RepositoryItemWrapper>
      <RepositoryDetails>
        <div>
          <Link to={`pulls/${login}/${name}`}>
            <Name>{name}</Name>
          </Link>
          <Description>{description}</Description>
        </div>
        <Status>
          <Fork color="#DE920C" />
          <StatusText>{forks_count}</StatusText>
          <Star color="#DE920C" style={{ marginLeft: 15 }} />
          <StatusText>{stargazers_count}</StatusText>
        </Status>
      </RepositoryDetails>
      <RepositoryUserDetail>
        <Img src={avatar_url} />
        <Username>{login}</Username>
      </RepositoryUserDetail>
    </RepositoryItemWrapper>
  );
};

export default RepositoryItem;
