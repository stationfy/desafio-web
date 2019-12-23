import React from 'react';
import ListItemUI from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import { GoRepoForked, GoStar, GoMarkGithub } from 'react-icons/go';

import UserProfile from '../UserProfile';
import { formatNumberToThousands } from '../../utils/NumberUtil';
import { getFirst250CharsDescription } from '../../utils/StringUtil';
import {
  Container,
  UserInfoContainer,
  RepositoryInfoContainer,
  ForkStarInfoContainer,
} from './styles';

export default function ListItemRepository({ repository, ...rest }) {
  const {
    name,
    description,
    stargazers_count,
    forks_count,
    owner,
  } = repository;

  return (
    <Container container direction="row" justify="center" alignItems="center">
      <ListItemUI button component="a" {...rest}>
        <RepositoryInfoContainer item xs={9}>
          <p className="name">
            <GoMarkGithub /> {name}
          </p>
          <small className="description">
            {getFirst250CharsDescription(description)}
          </small>
          <ForkStarInfoContainer item xs={10} lg={8}>
            <div>
              <GoStar className="firstIcon" />
              {formatNumberToThousands(stargazers_count)}
              <GoRepoForked /> {formatNumberToThousands(forks_count)}
            </div>
          </ForkStarInfoContainer>
        </RepositoryInfoContainer>

        <UserInfoContainer>
          <UserProfile avatarUrl={owner.avatar_url} name={owner.login} />
        </UserInfoContainer>
      </ListItemUI>
    </Container>
  );
}

ListItemRepository.propTypes = {
  repository: PropTypes.object.isRequired,
};
