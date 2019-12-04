import React from "react";
import { withRouter } from "react-router-dom";
import ArrowIcon from "../../assets/arrow.png";
import { Container, Arrow, BurguerMenu, HeaderContainer } from "./Styles";

const Header = props => {
  const goHome = () => props.history.push("/");
  return (
    <Container>
      {props.isPull ? (
        <Arrow src={ArrowIcon} alt="Voltar" onClick={goHome} />
      ) : (
        <BurguerMenu>
          <div></div>
          <div></div>
          <div></div>
        </BurguerMenu>
      )}
      <HeaderContainer>
        <h1>{props.children}</h1>
      </HeaderContainer>
    </Container>
  );
};

export default withRouter(Header);
