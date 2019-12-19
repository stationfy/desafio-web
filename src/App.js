import React from 'react';
import { Provider } from 'react-redux'; 
import store from './store';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch  >
        {routes.map(r => (
            <Route key={r.path} {...r}/>
        ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
