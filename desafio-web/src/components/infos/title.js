import styled, { css } from "styled-components";

const title = styled.h2`
  color: white;
  padding-top: 0.1em;
  ${props =>
    props.primary &&
    css`
      color: palevioletred;
      font-size: 2rem;
      text-transform: uppercase;

      @media only screen and (max-width: 1250px) {
        font-size: 2rem;
      }
    `};
`;

export default title;
