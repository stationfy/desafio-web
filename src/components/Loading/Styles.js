import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.img`
  animation: ${rotate360} 2s linear infinite;
  width: 60px;
  object-fit: cover;
`;
