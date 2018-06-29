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

  const nav = isRepo
    ? (
      <NavLink className="list-item__header--link" to={url}>
        {title}
      </NavLink>
    ) : (
      <a className="list-item__header--link" href={url}>
        {title}
      </a>
    );

  return (
    <div className="list-item__box">
      <div className="list-item__header">
        <h2 className="list-item__header--title">
          {nav}
        </h2>
      </div>
      <div className="list-item__body">
        <p className="list-item__body--text">
          {body && `${body.substr(0, 75)}${body.length >= 75 ? '...' : ''}`}
        </p>
      </div>
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
