import React, { Component } from 'react';
import { connect } from 'react-redux';
import getPullRequests from '../../store/actions/pullRequests';

class PRList extends Component {
  componentDidMount() {
    const { props } = this;
    props.getPullRequests();
  }

  render() {
    const { props } = this;
    return (
      <div>
        <p>
          Pull requests
        </p>
        <p>
          {props.error && props.error}
        </p>
        <p>
          {props.isLoading ? 'Loading...' : ''}
        </p>
        {props.pullRequests && props.pullRequests.map(repository => (
          <div key={repository.id}>
            {repository.title}
            <p>
              {repository.body}
            </p>
            <img src={repository.user.avatar_url} alt="" height="40px" />
            <span>
              {repository.user.login}
            </span>
            <p>
              {repository.created_at}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pullRequests: state.pullRequests.items,
  isLoading: state.pullRequests.isLoading,
  isError: state.pullRequests.isError,
  error: state.pullRequests.error,
});

const mapActionsToProps = {
  getPullRequests: page => getPullRequests(page),
};

export default connect(mapStateToProps, mapActionsToProps)(PRList);
