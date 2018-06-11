import React from 'react';
import ReactDOM from 'react-dom';
import RepoItem from './RepoItem';

it('renders RepoItem without crashing', () => {
  const div = document.createElement('div');
  const repoItemMock = {  id: '9',
                          full_name: 'js/jshero',
                          name: 'js',
                          description: 'The most used language of the World', 
                          forks_count: 99,
                          stargazers_count: 999,
                          owner: {
                            avatar_url: 'http://www.relatably.com/m/img/kitten-memes/g1335936233290502300.jpg'
                          }
                        }
  ReactDOM.render(<RepoItem key={ repoItemMock.id } data={ repoItemMock }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});