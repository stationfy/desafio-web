import React from 'react';

import propTypes from './propTypes';

const Error = ({ error }) => (
  <div className="error">
    {error}
  </div>
);

Error.defaultProps = {
  error: '',
};

Error.propTypes = {
  error: propTypes.error,
};

export default Error;
