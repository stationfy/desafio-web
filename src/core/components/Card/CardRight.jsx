import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Styled = styled.section`
  width:30%;
`;

const CardRight = ({ children }) => (
  <Styled>
    {children}
  </Styled>
);

CardRight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardRight;
