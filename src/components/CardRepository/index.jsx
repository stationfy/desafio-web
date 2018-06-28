import React from 'react';
import { FaCodeFork, FaStar } from 'react-icons/lib/fa';

// propTypes
import propTypes from './propTypes';

// Components
import User from '../User';
import TextContent from '../TextContent';

const CardRepository = (props) => {
  const {
    userAvatar,
    username,
    title,
    body,
    urlPr,
    forks,
    stars,
  } = props;

  return (
    <div>
      <div>
        <TextContent
          title={title}
          body={body}
          url={urlPr}
          isRepo
        />
        <User
          url={userAvatar}
          username={username}
        />
      </div>
      <div>
        <span>
          <FaCodeFork />
          {forks}
        </span>
        <span>
          <FaStar />
          {stars}
        </span>
      </div>
    </div>
  );
};

CardRepository.propTypes = {
  userAvatar: propTypes.userAvatar.isRequired,
  username: propTypes.username.isRequired,
  title: propTypes.title.isRequired,
  body: propTypes.body.isRequired,
  urlPr: propTypes.urlPr.isRequired,
  forks: propTypes.forks.isRequired,
  stars: propTypes.stars.isRequired,
};

export default CardRepository;
