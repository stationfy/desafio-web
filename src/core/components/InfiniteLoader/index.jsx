import React from 'react';
import styled from 'styled-components';

const InfiniteLoaderWrapper = styled.div`
  img{
    width:32px;
    height:32px;
    margin: auto;
    display: block;
  }
`;

const InfiniteLoader = () => (
  <InfiniteLoaderWrapper>
    <img src="https://loading.io/spinners/infinity/lg.infinity-rotate-cycle-loader.gif" alt="Loading more repositories" />
  </InfiniteLoaderWrapper>
);

export default InfiniteLoader;
