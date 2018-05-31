import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';
import './style.scss';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
