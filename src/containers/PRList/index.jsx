import React, { Component } from 'react';
import { connect } from 'react-redux';

import { pullRequestsActions } from '../../store/actions';

import propTypes from './propTypes';

class PRList extends Component {
  componentWillMount() {
    const { getPullRequests, match } = this.props;
    const { creator, repository } = match.params;
    getPullRequests(creator, repository);
  }

  goToHome() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const {
      pullRequests,
      isLoading,
      isError,
      error,
      match,
    } = this.props;
    const { repository: repositoryTitle } = match.params;

    return (
      <div>
        <p>
          {repositoryTitle.toUpperCase()}
        </p>
        <button
          onClick={() => this.goToHome()}
          type="button"
        >
          Return
        </button>
        <p>
          {isError && error}
        </p>
        <p>
          {isLoading ? 'Loading...' : ''}
        </p>
        {(pullRequests && !isLoading) && pullRequests.map((repository) => {
          const { id, title, body, user, _links } = repository; // eslint-disable-line
          return (
            <div key={id}>
              <a href={_links.html.href}>
                {title}
              </a>
              <p>
                {body}
              </p>
              <img src={user.avatar_url} alt="" height="40px" />
              <span>
                {user.login}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

PRList.defaultProps = {
  pullRequests: [],
  error: null,
  isError: false,
  isLoading: false,
};

PRList.propTypes = {
  pullRequests: propTypes.pullRequests,
  history: propTypes.history.isRequired,
  match: propTypes.match.isRequired,
  error: propTypes.error,
  isError: propTypes.isError,
  isLoading: propTypes.isLoading,
  getPullRequests: propTypes.getPullRequests.isRequired,
};

const mapStateToProps = state => ({
  pullRequests: state.pullRequests.items,
  isLoading: state.pullRequests.isLoading,
  isError: state.pullRequests.isError,
  error: state.pullRequests.error,
});

const mapActionsToProps = {
  getPullRequests: (creator, repository) => pullRequestsActions.getPullRequests(creator, repository), // eslint-disable-line
};

export default connect(mapStateToProps, mapActionsToProps)(PRList);
