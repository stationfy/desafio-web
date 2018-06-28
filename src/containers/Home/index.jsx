import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { repositoriesActions } from '../../store/actions';

import propTypes from './propTypes';

import User from '../../components/User';

class Home extends Component {
  componentWillMount() {
    const { repositories, getRepositories } = this.props;
    if (!repositories.length) {
      getRepositories();
    }
  }

  render() {
    const {
      repositories,
      isLoading,
      isError,
      error,
    } = this.props;

    return (
      <div>
        Github JavaPop
        <p>
          {isError ? error : ''}
        </p>
        <p>
          {isLoading ? 'Loading...' : ''}
        </p>
        {repositories && repositories.map(repository => (
          <div key={repository.id}>
            <NavLink to={`pullrequests/${repository.owner.login}/${repository.name}`}>
              {repository.name}
            </NavLink>
            <User url={repository.owner.avatar_url} username={repository.owner.login} />
            <hr />
          </div>
        ))}
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
