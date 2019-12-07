import styled, { css } from "styled-components";

const genericInfoContainer = styled.div`
  overflow-wrap: break-word;
  display: flex;
  align-items: center;
  padding-right: 2%;
  padding-left: 2%;
  margin-right: 2px;
  margin-top: 0.5%;
  width: 90%;

  ${props =>
    props.buttonContainer &&
    css`
      display: flex;
      flex-wrap:wrap
      width: 100%;
    `}
`;

export default genericInfoContainer;
