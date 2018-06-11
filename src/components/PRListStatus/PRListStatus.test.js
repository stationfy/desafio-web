import React from 'react';
import ReactDOM from 'react-dom';
import PRListStatus from './PRListStatus';

it('renders PRListStatus without crashing', () => {
  const div = document.createElement('div');
  const openedprs = 9;
  const closedprs = 9;
  ReactDOM.render(<PRListStatus openedprs={ openedprs }
                                closedprs={ closedprs }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});