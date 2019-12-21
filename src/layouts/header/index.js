import React from 'react';
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';
import { Wrapper } from './styles';
import Header from '../../components/Header';

export default function HeaderLayout({ children, title, mainPage = false }) {
  const location = useLocation();

  console.log(location);

  return (
    <Wrapper>
      <Header title={title} mainPage={mainPage} />
      {children}
    </Wrapper>
  );
}

HeaderLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
