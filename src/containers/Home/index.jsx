import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaBars, FaCodeFork, FaStar } from 'react-icons/lib/fa';
import InfiniteScroll from 'react-infinite-scroller';

// actions
import { repositoriesActions } from '../../store/actions';

// propTypes
import propTypes from './propTypes';

// components
import CardRepository from '../../components/Card';
import Error from '../../components/Error';
import Header from '../../components/Header';
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
          {isError && <Error error={error} />}
          {isLoading && <Spinner />}
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  error: null,
  isError: false,
  isLoading: false,
  repositories: [],
};

Home.propTypes = {
  error: propTypes.error,
  getRepositories: propTypes.getRepositories.isRequired,
  isError: propTypes.isError,
  isLoading: propTypes.isLoading,
  repositories: propTypes.repositories,
};

const mapStateToProps = state => ({
  error: state.repositories.error,
  isError: state.repositories.isError,
  isLoading: state.repositories.isLoading,
  repositories: state.repositories.items,
});

const mapActionsToProps = {
  getRepositories: page => repositoriesActions.getRepositories(page),
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
