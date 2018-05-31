import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './style.scss';

const Styled = styled.section`
  overflow-wrap: break-word;
  height:auto;
  padding: 20px 0;
  border-bottom: 1px solid #E0E0E0;
  display:flex;
  flex-flow :wrap;
  justify-content: space-between;
  &:first-child{
    padding:30px 0 20px 0;
  }
`;

const Card = ({ title, body, children }) => (
  <Styled>
    <div className="card-content">
      <h1 className="sub-title blue-text">{title}</h1>
      <p className="card-body">{body}</p>
    </div>
    {children}
  </Styled>
);

Card.defaultProps = {
  children: '',
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Card;
