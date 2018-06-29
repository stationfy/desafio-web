import React from 'react';

// propTypes
import propTypes from './propTypes';


const Header = ({ title, children }) => (
  <div className="header">
    <div>
      <span className={`header__icon ${children.props.isclickable && 'header__icon--hover'}`}>
        {children}
      </span>
    </div>
    <div className="header__text">
      <h1 className="header__text--title">
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
