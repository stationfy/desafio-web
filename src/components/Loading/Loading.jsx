import React from "react";

import LoadingIcon from "../../assets/loading.svg";

import { Container, Spinner } from "./Styles";

const Loading = () => {
  return (
    <Container>
      <Spinner src={LoadingIcon} alt="Carregando" />
    </Container>
  );
};

export default Loading;
