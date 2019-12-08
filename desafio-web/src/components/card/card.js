import styled from "styled-components";

const card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% auto;
  width: 40%;
  border-radius: 5%;
  background: white;
  overflow: auto;
  border: 1px solid #4db8ff;

  @media only screen and (max-width: 1250px) {
    width: 85%;
    margin: 19% auto;
  }
`;
card.displayName = "card";
export default card;
