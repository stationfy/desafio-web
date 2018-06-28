import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaArrowLeft } from 'react-icons/lib/fa';

// actions
import { pullRequestsActions } from '../../store/actions';

// propTypes
import propTypes from './propTypes';

// components
import Header from '../../components/Header';
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
      pullRequests: prs,
      isLoading,
      isError,
      error,
      match,
    } = this.props;
    const { repository } = match.params;

    const pullRequests = prs.map(pr => (
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
        <Header title={repository}>
          <FaArrowLeft onClick={() => this.goToHome()} />
        </Header>
        <div>
          <div>
            {isError && error}
          </div>
          <div>
            {isLoading ? 'Loading...' : ''}
          </div>
          {!isLoading && pullRequests}
        </div>
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
