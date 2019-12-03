import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  padding: 15px;
  display: flex;
  align-items: center;
  background-color: #333;
`;

export const BurguerMenu = styled.div`
  width: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    cursor: pointer;
    height: 3px;
    width: 25px;
    margin: 2px 0;
    background: #fff;
  }
`;

export const HeaderContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 3rem;

  h1 {
    font-size: 1.6rem;
    color: #ffff;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  @media screen and (min-width: 560px) {
    justify-content: center;
    h1 {
      font-size: 1.8rem;
      padding-right: 8rem;
    }
  }
`;
