import React from 'react';

// propTypes
import propTypes from './propTypes';

// Components
import User from '../User';
import TextContent from '../TextContent';

const Card = (props) => {
  const {
    body,
    createAt,
    children,
    isRepo,
    title,
    urlLink,
    userAvatar,
    username,
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
  body: null,
  createAt: null,
  children: null,
};

Card.propTypes = {
  body: propTypes.body,
  createAt: propTypes.createAt,
  children: propTypes.children,
  isRepo: propTypes.isRepo.isRequired,
  title: propTypes.title.isRequired,
  urlLink: propTypes.urlLink.isRequired,
  userAvatar: propTypes.userAvatar.isRequired,
  username: propTypes.username.isRequired,
};

export default Card;
