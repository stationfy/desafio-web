import React from 'react';

// propTypes
import propTypes from './propTypes';

const header = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#343438',
  color: 'white',
};

const headerTitle = {
  paddingLeft: '20px',
  fontSize: '12px',
};

const icon = {
  cursor: 'pointer',
};

const Header = ({ title, children }) => (
  <div style={header}>
    <div>
      <span style={children.props.isclickable ? icon : null}>
        {children}
      </span>
    </div>
    <div style={headerTitle}>
      <h1>
        {title}
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  title: propTypes.title.isRequired,
  children: propTypes.children.isRequired,
};

export default Header;
