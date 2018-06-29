import React from 'react';

// propTypes
import propTypes from './propTypes';

// Components
import User from '../User';
import TextContent from '../TextContent';

const Card = (props) => {
  const {
    userAvatar,
    username,
    title,
    body,
    urlLink,
    isRepo,
    children,
  } = props;

  return (
    <div className="list-item">
      <div className="list-item__data">
        <div>
          <TextContent
            title={title}
            body={body}
            url={urlLink}
            isRepo={isRepo}
          />
          {children}
        </div>
        <User
          url={userAvatar}
          username={username}
        />
      </div>
    </div>
  );
};

Card.defaultProps = {
  children: null,
  body: null,
};

Card.propTypes = {
  userAvatar: propTypes.userAvatar.isRequired,
  username: propTypes.username.isRequired,
  title: propTypes.title.isRequired,
  body: propTypes.body,
  urlLink: propTypes.urlLink.isRequired,
  isRepo: propTypes.isRepo.isRequired,
  children: propTypes.children,
};

export default Card;
