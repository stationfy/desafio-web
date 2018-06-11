import React from 'react';
import ReactDOM from 'react-dom';
import PRItem from './PRItem';

it('renders PRListStatus without crashing', () => {
  const div = document.createElement('div');
  const prItemMock = {  id: '9',
                          title: 'Very important refactor', 
                          body: 'Refactored this and made it better',
                          user: {
                            login: 'GoodProgrammer',
                            avatar_url: 'https://imgflip.com/i/1701y5'
                          }
                        }
  const fullName = { q: 'js/jsislife' };
  ReactDOM.render(<PRItem key={ prItemMock.id } data={ prItemMock } fullName={ fullName }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});