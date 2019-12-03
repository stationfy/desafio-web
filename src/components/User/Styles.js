import styled from "styled-components";

export const Container = styled.div`
  min-width: 90px;
  display: flex;
  flex-direction: ${props => (props.isRepo ? "row" : "column")};
  align-items: center;
  justify-content: ${props => (props.isRepo ? "flex-start" : "center")};

  img {
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.isRepo ? "flex-start" : "center")};
    margin-left: ${props => (props.isRepo ? "5px" : "none")};
    p {
      color: #777;
      width: 100px;
      text-align: center;
      overflow-wrap: break-word;
    }
  }
`;
