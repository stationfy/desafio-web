import styled from "styled-components";

const topBanner = styled.div`
  background: palevioletred;
  width: 100%;
  height: 5em;
  color: white;
  font-size: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 850px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 1rem;
  }
`;

export default topBanner;
