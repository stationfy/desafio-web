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
    createAt,
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
            createAt={createAt}
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
  createAt: null,
};

Card.propTypes = {
  userAvatar: propTypes.userAvatar.isRequired,
  username: propTypes.username.isRequired,
  title: propTypes.title.isRequired,
  body: propTypes.body,
  urlLink: propTypes.urlLink.isRequired,
  isRepo: propTypes.isRepo.isRequired,
  children: propTypes.children,
  createAt: propTypes.createAt,
};

export default Card;
