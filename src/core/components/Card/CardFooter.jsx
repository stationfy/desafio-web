import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.section`
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
  <Styled>
    {children}
  </Styled>
);

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardFooter;
