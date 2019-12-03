import React from "react";

import { Container, Title } from "./Style";

const Description = ({ login, description }) => {
  return (
    <Container>
      <Title href="#">{login}</Title>
      <p>{description}</p>
    </Container>
  );
};

export default Description;
