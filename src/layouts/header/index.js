import React from 'react';
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';
import { Wrapper, HeaderContainer } from './styles';

export default function HeaderLayout({ children }) {
  const location = useLocation();

  console.log(location);

  return (
    <Wrapper>
      <HeaderContainer />
      {children}
    </Wrapper>
  );
}

HeaderLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
