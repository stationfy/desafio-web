import React from "react";
import Menu from "react-icons/lib/md/menu";

import styled from "styled-components";

const HeaderWrapper = styled.div`
    width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: #37373b;
  height: 50px;
  color: white;
`;

const TitleWrapper = styled.span`
  display: flex;
  font-size: 20px;
  color: #ffffff;
  flex: 5;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Header = props => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Icon>
          <Menu size="35" />
        </Icon>
        <TitleWrapper>Github JavaPop</TitleWrapper>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
