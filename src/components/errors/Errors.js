import React from "react";

import styled from "styled-components";

const Errors = props => {
  return (
    <div className="loader">
      <p>{props.messageError}</p>
    </div>
  );
};

export default Errors;
