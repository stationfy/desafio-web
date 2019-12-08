import styled from "styled-components";

const button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 3% 7%;
  margin: 0.5rem 1rem;
  width: 35%;
  background: palevioletred;
  color: white;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  border-radius: 10%;

  &:hover {
    background: #d46868;
  }

  @media only screen and (max-width: 1250px) {
    font-size: 0.7rem;
  }
`;

export default button;
