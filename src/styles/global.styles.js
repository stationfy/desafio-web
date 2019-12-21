import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  body {
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: #4080BF;
    &:visited,
    &:active {
      text-decoration: none;
      color: #4080BF;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
`;
