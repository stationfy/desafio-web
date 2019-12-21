import styled from "styled-components";

export const Container = styled.div`
  display: inline-grid;
  grid-template-columns: ${props =>
    props.isRepo ? "1fr" : "minmax(250px, 2fr) minmax(150px, 1fr)"};
  align-items: center;
  width: 90%;
  grid-gap: 15px;
  padding-bottom: 25px;
  border-bottom: 1px solid #ddd;
  margin: 15px 0;
  @media screen and (min-with: 650px) {
    width: 500px;
    grid-gap: 30px;
  }
`;
