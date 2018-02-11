import React from "react";
import FaSpinner from 'react-icons/lib/fa/spinner';
import styled from "styled-components";

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  animation: loading-spin infinite 10s linear;
  @keyframes loading-spin {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  }
`;



const LoadingInfiteScroll = props => {
  return (
    <Spinner>
      <FaSpinner fontSize={25}/>
    </Spinner>
  );
};

export default LoadingInfiteScroll;
