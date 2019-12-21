import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 25px;
  border-bottom: 1px solid #ddd;
  margin: 15px 0;
  width: 90%;
  max-width: 90%;
  & > p {
    font-weight: bold;
    align-self: flex-end;
    padding-right: 10px;
  }
`;
