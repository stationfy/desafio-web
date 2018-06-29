import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { FaBars, FaCodeFork, FaStar } from 'react-icons/lib/fa';

// actions
import { repositoriesActions } from '../../store/actions';

// propTypes
import propTypes from './propTypes';

// components
import Header from '../../components/Header';
import CardRepository from '../../components/Card';
import Spinner from '../../components/Spinner';

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
      repositories: repos,
      isLoading,
      error,
      isError,
    } = this.props;

    const repositories = repos.map(repository => (
      <CardRepository
        key={repository.id}
        title={repository.name}
        body={repository.description}
        username={repository.owner.login}
        userAvatar={repository.owner.avatar_url}
        urlLink={`pullrequests/${repository.owner.login}/${repository.name}`}
        isRepo
      >
        <div className="symbol">
          <div className="symbol__body">
            <FaCodeFork />
            {repository.forks_count}
          </div>
          <div className="symbol__body">
            <FaStar />
            {repository.stargazers_count}
          </div>
        </div>
      </CardRepository>
    ));

    return (
      <div>
        <Header title="Github JavaPop">
          <FaBars />
        </Header>
        <div className="content-container">
          <InfiniteScroll
            pageStart={1}
            loadMore={page => this.fetchRepositories(page)}
            hasMore={!isLoading && repositories.length !== 0}
            useWindow={false}
          >
            <div className="repository">
              {repositories}
            </div>
          </InfiniteScroll>
          <div className="error">
            {isError && error}
          </div>
          {isLoading && <Spinner />}
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
