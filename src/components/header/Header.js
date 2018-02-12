import React from "react";
import Menu from "react-icons/lib/md/menu";
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import { hashHistory } from "react-router";

import styled from "styled-components";

const HeaderWrapper = styled.div`width: 100%;`;

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
  height: 25px;
`;

const Header = props => {
  const { title } = props;
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Icon>
          {
            props.initialPage ? <FaArrowLeft size="20" onClick={() => hashHistory.push("/")} /> : <Menu size="20" />
          }
        </Icon>
        <TitleWrapper>{title}</TitleWrapper>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
