import React from 'react';

// propTypes
import propTypes from './propTypes';

const Header = ({ children, title }) => (
  <div className="header">
    <div>
      <span className={`${children.props.isclickable ? 'header__icon header__icon--hover' : 'header__icon'}`}>
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
  children: propTypes.children.isRequired,
  title: propTypes.title.isRequired,
};

export default Header;
