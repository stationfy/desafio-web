import React from 'react';
import ListItemUI from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

import UserProfile from '../UserProfile';
import { formatDate } from '../../utils/DateUtil';
import {
  getFirst100CharsTitle,
  getFirst250CharsDescription,
} from '../../utils/StringUtil';
import {
  Container,
  UserInfoContainer,
  PullRequestInfoContainer,
} from './styles';

export default function ListItemPullRequest({ pullRequest, ...rest }) {
  const { title, body, html_url, created_at, user } = pullRequest;

  return (
    <Container container direction="row" justify="center" alignItems="center">
      <ListItemUI button component="a" href={html_url} target="blank" {...rest}>
        <PullRequestInfoContainer item xs={9}>
          <p className="name">{getFirst100CharsTitle(title)}</p>
          <p className="description">{getFirst250CharsDescription(body)}</p>
          <p className="date">{formatDate(new Date(created_at))}</p>
        </PullRequestInfoContainer>
        <UserInfoContainer>
          <UserProfile avatarUrl={user.avatar_url} name={user.login} />
        </UserInfoContainer>
      </ListItemUI>
    </Container>
  );
}

ListItemPullRequest.propTypes = {
  pullRequest: PropTypes.object.isRequired,
};
