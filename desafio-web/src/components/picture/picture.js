import styled from "styled-components";

const picture = styled.img`
  src=${props => props.src}
  max-height:8%;
  max-width:8%;
  border-radius:50%
  margin-top:1%;
  margin-left:1%
  position:absolute
`;

export default picture;
