import React, { Component } from 'react';
import { connect } from 'react-redux';
import { repositoriesActions } from '../../store/actions';

class Home extends Component {
  componentWillMount() {
    const { props } = this;
    props.getRepositories();
  }

  render() {
    const { props } = this;
    return (
      <div>
        Repositories
        <p>
          {props.repositories.error ? props.repositories.error : ''}
        </p>
        <p>
          {props.repositories.isLoading ? 'Loading...' : ''}
        </p>
        {props.repositories.items && props.repositories.items.map(repository => (
          <div key={repository.id}>
            {repository.name}
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

const mapStateToProps = state => ({ ...state });

const mapActionsToProps = {
  getRepositories: page => repositoriesActions.getRepositories(page),
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
