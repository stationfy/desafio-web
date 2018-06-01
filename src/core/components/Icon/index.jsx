import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon }) => (
  <i className={`fas fa-${icon}`} />
);

export default Icon;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};
