import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardFooterWrapper = styled.section`
  width:60%;
  padding:10px 0 0 0;
  margin-top: -10px;
  display:flex;
  section{
    padding:0 10px;
    color:#D89200;
    &:first-child{
      padding:0 10px 0 0;
    }
  }
`;

const CardFooter = ({ children }) => (
  <CardFooterWrapper>
    {children}
  </CardFooterWrapper>
);

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardFooter;
