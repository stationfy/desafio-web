import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  align-items: center;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const RepoInfo = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;

  & > div {
    display: flex;
    width: 150px;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 800px) {
    height: 150px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: center;

  img {
    width: 50px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  span {
    color: #4080bf;
  }

  p {
    color: #777;
  }
`;
