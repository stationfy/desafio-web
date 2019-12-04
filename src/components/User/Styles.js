import styled from "styled-components";

export const Container = styled.div`
  min-width: 90px;
  display: flex;
  flex-direction: ${props => (props.isPull ? "row" : "column")};
  align-items: center;
  justify-content: ${props => (props.isPull ? "flex-start" : "center")};
  margin-top: ${props => (props.isPull ? "15px" : 0)};
  img {
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.isPull ? "flex-start" : "center")};
    margin-left: ${props => (props.isPull ? "15px" : 0)};
    span {
      color: #4080bf;
    }
    p {
      color: #777;
      width: 100px;
      text-align: center;
      overflow-wrap: break-word;
    }
  }
`;
