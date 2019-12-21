import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";

export const Container = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinToWin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(FaSpinner)`
  animation: ${SpinToWin} 2s infinite linear;
`;
