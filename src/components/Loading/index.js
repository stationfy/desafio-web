import React from "react";

import { Container, Spinner } from "./Styles";

const Loading = () => {
  return (
    <Container>
      <Spinner size={90} />
    </Container>
  );
};

export default Loading;
