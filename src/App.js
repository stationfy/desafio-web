import React, { Component } from 'react';
import { Provider } from 'react-redux'; 

import store from './store';
import App2 from './components/home/App2';
class App extends Component {
  render() {
    return(
      <div>
        <Provider store={store}>
          <App2 />
        </Provider>
      </div>
    )
  }
}

export default App;