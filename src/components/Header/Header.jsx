import React from "react";

import { Container, BurguerMenu, HeaderContainer } from "./Styles";

const Header = () => {
  return (
    <Container>
      <BurguerMenu>
        <div></div>
        <div></div>
        <div></div>
      </BurguerMenu>
      <HeaderContainer>
        <h1>Github JavaPop</h1>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
