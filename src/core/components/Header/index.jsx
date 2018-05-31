import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styled = styled.header`
  background:#37373B;
  width: 100%;
  height:50px;
  display:flex;
  color:white;
  .header-item{
    line-height: 50px;
  }
  &:first-child{
    padding:0 0 0 10px;
  }
`;

const Header = ({ children }) => (
  <Styled>
    {children}
  </Styled>
);

export default Header;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
