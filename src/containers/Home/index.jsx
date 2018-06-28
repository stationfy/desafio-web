import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { FaBars } from 'react-icons/lib/fa';

// actions
import { repositoriesActions } from '../../store/actions';

// propTypes
import propTypes from './propTypes';

// components
import Header from '../../components/Header';
import CardRepository from '../../components/CardRepository';

const divStyle = {
  margin: '0px',
  border: '1px solid pink',
  height: '99%',
  overflow: 'auto',
};

class Home extends Component {
  componentWillMount() {
    const { repositories, getRepositories } = this.props;
    if (!repositories.length) {
      getRepositories();
    }
  }

  fetchRepositories(page) {
    const { getRepositories } = this.props;
    getRepositories(page);
  }

  render() {
    const {
      repositories,
      isLoading,
      error,
      isError,
    } = this.props;

    const repos = repositories.map(repository => (
      <CardRepository
        key={repository.id}
        title={repository.name}
        body={repository.description}
        username={repository.owner.login}
        userAvatar={repository.owner.avatar_url}
        urlPr={`pullrequests/${repository.owner.login}/${repository.name}`}
        forks={repository.forks_count}
        stars={repository.stargazers_count}
      />
    ));

    return (
      <div>
        <Header title="Github JavaPop">
          <FaBars />
        </Header>
        <div style={divStyle}>
          <InfiniteScroll
            pageStart={1}
            loadMore={page => this.fetchRepositories(page)}
            hasMore={!isLoading && repos.length !== 0}
          >
            {repos}
          </InfiniteScroll>
          <div>
            {isError && error}
          </div>
          <div>
            {isLoading ? 'Loading...' : ''}
          </div>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  repositories: [],
  error: null,
  isError: false,
  isLoading: false,
};

Home.propTypes = {
  repositories: propTypes.repositories,
  error: propTypes.error,
  isError: propTypes.isError,
  isLoading: propTypes.isLoading,
  getRepositories: propTypes.getRepositories.isRequired,
};

const mapStateToProps = state => ({
  repositories: state.repositories.items,
  isLoading: state.repositories.isLoading,
  isError: state.repositories.isError,
  error: state.repositories.error,
});

const mapActionsToProps = {
  getRepositories: page => repositoriesActions.getRepositories(page),
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
