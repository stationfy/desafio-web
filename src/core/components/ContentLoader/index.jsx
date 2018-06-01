import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

const ContentLoaderWrapper = styled.section`
  padding:20px 0 0 0;
  max-width: 100%;
  .listWrapper{
    border-bottom: 1px solid #E0E0E0;
    width:100%;
    height:100px;
    padding:10px 0 0 0;
    svg{
      height:100px;
    }
  }
`;

const Loader = ({ loaders }) => (
  <ContentLoaderWrapper>
    {Array.from(Array(loaders)).map(() => (
      <div className="listWrapper" key={Math.random()}>
        <ContentLoader
          height={160}
          width={400}
          speed={2}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >
          <rect x="17" y="16" rx="3" ry="3" width="183.3" height="12.95" />
          <rect x="62" y="125" rx="0" ry="0" width="70.8" height="21" />
          <rect x="194" y="125" rx="0" ry="0" width="88" height="21" />
          <rect x="17" y="43.27" rx="0" ry="0" width="372" height="21" />
          <rect x="17" y="74.27" rx="0" ry="0" width="267" height="21" />
          <rect x="152" y="125" rx="0" ry="0" width="28" height="21" />
          <rect x="18" y="125" rx="0" ry="0" width="31" height="21" />
        </ContentLoader>
      </div>))}
  </ContentLoaderWrapper>
);

Loader.defaultProps = {
  loaders: 5,
};

Loader.propTypes = {
  loaders: PropTypes.number,
};

export default Loader;
