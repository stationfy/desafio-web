import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { repositoriesActions } from '../../store/actions';

class Home extends Component {
  componentWillMount() {
    const { props } = this;
    if (!props.repositories.length) {
      props.getRepositories();
    }
  }

  render() {
    const { props } = this;
    return (
      <div>
        Repositories
        <p>
          {props.error ? props.error : ''}
        </p>
        <p>
          {props.isLoading ? 'Loading...' : ''}
        </p>
        {props.repositories && props.repositories.map(repository => (
          <div key={repository.id}>
            <NavLink to={`pullrequests/${repository.owner.login}/${repository.name}`}>
              {repository.name}
            </NavLink>
            <strong>
              {repository.id}
            </strong>
            <img src={repository.owner.avatar_url} alt="" height="40px" />
            <span>
              {repository.owner.login}
            </span>
          </div>
        ))}
      </div>
    );
  }
}

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
