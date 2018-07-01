import React from 'react';
import { NavLink } from 'react-router-dom';

// propTypes
import propTypes from './propTypes';

// Utils
import { stringUtils, dateUtils } from '../../utils';

const TextContent = (props) => {
  const {
    body,
    title,
    url,
    createAt,
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

  const bodyText = stringUtils.limitString(body, 75);
  const dateText = createAt && dateUtils.toLocaleDateString(createAt);

  return (
    <div className="list-item__box">
      <div className="list-item__header">
        <h2 className="list-item__header--title">
          {nav}
        </h2>
      </div>
      <div className="list-item__body">
        <p className="list-item__body--text">
          {bodyText}
        </p>
        {createAt && (
          <p>
            Date:
            {dateText}
          </p>
        )}
      </div>
    </div>
  );
};

TextContent.defaultProps = {
  body: '',
  createAt: '',
};

TextContent.propTypes = {
  body: propTypes.body,
  createAt: propTypes.createAt,
  isRepo: propTypes.isRepo.isRequired,
  title: propTypes.title.isRequired,
  url: propTypes.url.isRequired,
};

export default TextContent;
