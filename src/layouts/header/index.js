import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '../../components/Header';

export default function HeaderLayout({ children, title, mainPage }) {
  return (
    <Wrapper>
      <Header title={title} mainPage={mainPage} />
      {children}
    </Wrapper>
  );
}

HeaderLayout.defaultProps = {
  mainPage: false,
};

HeaderLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  mainPage: PropTypes.bool,
};
