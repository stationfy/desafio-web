import React from 'react';

// propTypes
import propTypes from './propTypes';

const Header = ({ title, children }) => (
  <div>
    <span>
      {children}
    </span>
    <h2>
      {title}
    </h2>
  </div>
);

Header.propTypes = {
  title: propTypes.title.isRequired,
  children: propTypes.children.isRequired,
};

export default Header;
