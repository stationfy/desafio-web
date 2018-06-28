import React from 'react';
import { NavLink } from 'react-router-dom';

// propTypes
import propTypes from './propTypes';

const TextContent = (props) => {
  const {
    body,
    title,
    url,
    isRepo,
  } = props;

  let nav = (
    <NavLink to={url}>
      {title}
    </NavLink>
  );

  if (!isRepo) {
    nav = (
      <a href={url}>
        {title}
      </a>
    );
  }

  return (
    <div>
      <h2>
        {nav}
      </h2>
      <p>
        {body}
      </p>
    </div>
  );
};

TextContent.defaultProps = {
  body: '',
};

TextContent.propTypes = {
  body: propTypes.body,
  title: propTypes.title.isRequired,
  url: propTypes.url.isRequired,
  isRepo: propTypes.isRepo.isRequired,
};

export default TextContent;
