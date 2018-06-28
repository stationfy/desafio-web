import React from 'react';

// propTypes
import propTypes from './propTypes';

// Components
import TextContent from '../TextContent';
import User from '../User';

const CardPullRequest = (props) => {
  const {
    title,
    body,
    url,
    userAvatar,
    username,
  } = props;

  return (
    <div>
      <div>
        <TextContent
          title={title}
          body={body}
          url={url}
          isRepo={false}
        />
        <User
          url={userAvatar}
          username={username}
        />
      </div>
    </div>
  );
};

CardPullRequest.defaultProps = {
  body: '',
};

CardPullRequest.propTypes = {
  body: propTypes.body,
  title: propTypes.title.isRequired,
  url: propTypes.url.isRequired,
  userAvatar: propTypes.userAvatar.isRequired,
  username: propTypes.username.isRequired,
};

export default CardPullRequest;
