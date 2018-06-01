import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled.section`
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

const CardContent = styled.div`
  max-width:${props => props.contentSize}%;
`;

const Card = ({
  title,
  body,
  children,
  contentSize,
}) => (
  <CardWrapper>
    <CardContent contentSize={contentSize}>
      <h1 className="sub-title blue-text">{title}</h1>
      <p className="card-body">{body}</p>
    </CardContent>
    {children}
  </CardWrapper>
);

Card.defaultProps = {
  children: '',
  contentSize: 65,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  children: PropTypes.node,
  contentSize: PropTypes.number,
};

export default Card;
