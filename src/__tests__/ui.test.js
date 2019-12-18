import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ReposPage from '../pages/ReposPage/ReposPage';
import PullsPage from '../pages/PullsPage/PullsPage';
import Header from '../components/Header';
import Loading from '../components/Loading';
import PullRequest from '../components/PullRequest';
import Repo from '../components/Repo';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Components', () => {
  it('should render correctly <PullsPage>', () => {
    
    const mockStore = configureStore();
    const store = mockStore({
      pulls: {
        loading: false,
        data: [
          {
            id: 42,
            title: 'Tralala',
            body: 'Lorem ipsum avada mor',
            user: { login: 'Coralina', avatar_url: 'https://trelele.com.br' }
          }
        ]
      },
  });
    const wrapper = mount(
            <Provider store={store}>
              <MemoryRouter>
                <PullsPage match={{params:"/Coralina/TalkBot"}} />
              </MemoryRouter>
            </Provider>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly <ReposPage>', () => {
    
    const mockStore = configureStore();
    const store = mockStore({
      repos: {
        loading: false,
        data: [
          {
            id: 42,
            full_name: 'Captain Jack Sparrow',
            name: 'Sparrow',
            description: 'Owner of Black Pearl',
            owner: { login: 'CapJS', avatar_url: 'https://sparrowphotos.com' },
            stargazers_count: 3000,
            forks_count: 4000
          }
        ]
      },
  });
    const wrapper = mount(
            <Provider store={store}>
              <MemoryRouter>
                <ReposPage />
              </MemoryRouter>
            </Provider>);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Components', () => {
  it('should render correctly <Header />', () => {
    
    const wrapper = shallow(<Header />);
            
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly <Loading />', () => {
    
    const wrapper = shallow(<Loading />);
            
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly <PullRequest />', () => {
    
    const wrapper = shallow(
      <PullRequest 
      pull={
        {
         title: 'Tralala',
         body: 'Lorem ipsum avada mor',
         user: { login: 'Coralina', avatar_url: 'https://trelele.com.br' }
       }
     }
      />
    );
            
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly <Repo />', () => {
    
    const wrapper = shallow(
      <Repo 
      repo={
         {
          id: 42,
          full_name: 'Captain Jack Sparrow',
          name: 'Sparrow',
          description: 'Owner of Black Pearl',
          owner: { login: 'CapJS', avatar_url: 'https://sparrowphotos.com' },
          stargazers_count: 3000,
          forks_count: 4000
        }
      }
      />
    );
            
    expect(wrapper).toMatchSnapshot();
  });
});