import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  word-break: break-word;

  img {
    width: 50px;
    border-radius: 50%;
  }

  h1 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 0 auto;

    span {
      color: #4080bf;
    }
  }
`;
