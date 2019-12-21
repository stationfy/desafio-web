import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft } from 'react-icons/fa';

import { useLocation } from 'react-router-dom';
import { HeaderContainer } from './styles';

export default function Header({ title, mainPage }) {
  const location = useLocation();

  console.log(location);

  return (
    <HeaderContainer>
      {mainPage && <FaArrowLeft size={50} color="#fff" />}
      <strong>{title}</strong>
    </HeaderContainer>
  );
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
};
