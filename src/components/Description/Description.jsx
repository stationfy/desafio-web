import React from "react";
import PropTypes from "prop-types";

import formatText from "../../utils/formatText";

import { Container, TitleIn, TitleOut } from "./Style";

const Description = ({ name, title, description, html_url, isPull }) => {
  const content = isPull ? formatText(description, 250) : description;
  const titleContent = isPull ? formatText(title, 50) : title;
  return (
    <Container>
      {!isPull ? (
        <TitleIn to={`/${title}/${name}`}>{title}</TitleIn>
      ) : (
        <TitleOut href={html_url}>{titleContent}</TitleOut>
      )}
      <p>{content}</p>
    </Container>
  );
};

Description.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  html_url: PropTypes.string,
  isPull: PropTypes.bool
};

export default Description;
