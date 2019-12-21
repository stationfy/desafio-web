import React from "react";
import { withRouter } from 'react-router-dom';

import PropTypes from "prop-types";

import { Container } from "./Styles";

import { FaArrowLeft } from 'react-icons/fa';


const Header = props => {

  const homePage = () => props.history.push("/");

  const isHomePage = () => props.location.pathname === "/";

  return (
    <Container>
      {!isHomePage() ? <FaArrowLeft size={20} onClick={homePage} /> : null}
      <h1>{props.children}</h1>
    </Container>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default withRouter(Header);
