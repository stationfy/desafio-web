import React from "react";
import { GlobalStyle } from "./styles/global.styles";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
