import React from "react";
import styled from "styled-components";

const ListItem = (props) => {

  const { type } = props;

  const Container = styled.a`
    display: block;
    text-decoration: none;
    color: #1c1c1c;
    position: relative;
    padding: 2%;
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 2px #f9f9f9;
    width: 90%;
    margin-bottom: 5%;
    &:hover {
      transform: translateY(2px);
    }
  `;

  const Title = styled.p`
    font-size: 1rem;
    font-weight: 600;
  `;

  const Description = styled.p`
    font-size: 0.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    max-width: 200px;
  `;

  const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const Avatar = styled.div`
    position: absolute;
    right: 2%;
    top: 33%;
    background-image: url(${type === "repo" ? props.owner.avatar_url : props.user.avatar_url });
    width: 50px;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 8%;
  `
  if (type === "repo") {
    const { name, description, stargazers_count, forks, full_name, } = props;

    return (
      <Container href={full_name}>
          <div>
            <Title>{name}</Title>
            <Description>{description}</Description>
          <Stats>
            <Description><b>Forks:</b> {forks}</Description>
            <Description><b>Stars:</b> {stargazers_count}</Description>
          </Stats>
        </div>
        <Avatar/>
      </Container>
    );
  }

  const { html_url, title, body, created_at, user } = props

  return (
    <Container href={html_url}>
      <div>
        <Title>{title}</Title>
        <Description>{body}</Description>
        <Stats>
          <Description><b>Created at:</b> {created_at}</Description>
          <Description><b>Author:</b> {user.login}</Description>
        </Stats>
      </div>
      <Avatar/>
    </Container>
  )
};

export default ListItem;