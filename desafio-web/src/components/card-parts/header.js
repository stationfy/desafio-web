import styled from "styled-components";

// const header = styled.div`

//   margin-top: 0;
//   width: 100%;
//   height: 9em;

//   justify-content:flex-end
//   overflow-wrap: break-word;

//   border-radius-top: 5%;
// `;

const header = styled.div`
  display:flex;
  justify-content:flex-end
  height: 30%;
  background: background-color: #0cbaba;
  background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);

  @media only screen and (max-width: 1250px) {
    display:flex;
    justify-content:center

  }

`;

header.displayName = "header";

export default header;
