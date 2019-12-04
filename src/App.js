import React from "react";
import { GlobalStyle } from "./styles/global.styles";

import Routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
