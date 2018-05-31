import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Icon = ({ icon }) => (
  <i className={`fas fa-${icon}`} />
);

export default Icon;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};
