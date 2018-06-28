import React, { Component } from 'react';
import { connect } from 'react-redux';

import { pullRequestsActions } from '../../store/actions';

import propTypes from './propTypes';

import CardPullRequest from '../../components/CardPullRequest';

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
    const { repository } = match.params;

    const prs = pullRequests.map(pr => (
      <CardPullRequest
        key={pr.id}
        url={pr._links.html.href} // eslint-disable-line
        title={pr.title}
        body={pr.body}
        userAvatar={pr.user.avatar_url}
        username={pr.user.login}
      />
    ));

    return (
      <div>
        <p>
          {repository.toUpperCase()}
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
        {(pullRequests && !isLoading) && prs}
      </div>
    );
  }
}

PRList.defaultProps = {
  pullRequests: [],
  history: {},
  match: {},
  error: null,
  isError: false,
  isLoading: false,
};

PRList.propTypes = {
  pullRequests: propTypes.pullRequests,
  history: propTypes.history,
  match: propTypes.match,
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
