import React from "react";

import { Link } from "react-router";

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

const PullRequestItem = props => {
  const { title, body } = props.pullRequest;
  const { login, avatar_url } = props.pullRequest.user;
  return (
    <RepositoryItemWrapper>
      <RepositoryDetails>
        <div>
          <Link>
            <Name>{title}</Name>
          </Link>
          <Description>{body}</Description>
        </div>
        <RepositoryUserDetail>
          <Img src={avatar_url} />
          <Username>{login}</Username>
        </RepositoryUserDetail>
      </RepositoryDetails>
    </RepositoryItemWrapper>
  );
};

export default PullRequestItem;
