import React from "react";
import { Link } from "react-router";
import moment from "moment";
import styled from "styled-components";

const PullRequestWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid #bbb;
`;

const PullRequestInfosDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const PullRequestUser = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Name = styled.h1`
  color: #0366d6;
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 14px;
  width: 100%;
  color: #586069;
  white-space: wrap;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const Username = styled.p`
align-items: center;
  color: #4e93e2;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  justify-content: flex-start;
  line-height: 0px;
  padding-left: 10px;
`;

const PullRequestItem = props => {
  const { title, body, number, created_at } = props.pullRequest;
  const { login, avatar_url } = props.pullRequest.user;
  const { ref } = props.pullRequest.head;

  console.log(props.pullRequest);
  console.log(body);
  return (
    <PullRequestWrapper>
      <PullRequestInfosDetail>
        <Link>
          <Name>{title}</Name>
        </Link>
        <Description>
          #{number} {login} wants to merge {ref} to {props.pullRequest.base.ref}{" "}
          <em>{moment(new Date(created_at)).fromNow()}</em>
        </Description>
        <PullRequestUser>
          <Img src={avatar_url} />
          <Username>{login}</Username>
        </PullRequestUser>
      </PullRequestInfosDetail>
    </PullRequestWrapper>
  );
};

export default PullRequestItem;
