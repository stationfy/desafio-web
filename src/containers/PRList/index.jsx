import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaArrowLeft } from 'react-icons/lib/fa';

// Actions
import { pullRequestsActions } from '../../store/actions';

// PropTypes
import propTypes from './propTypes';

// Components
import CardPullRequest from '../../components/Card';
import Error from '../../components/Error';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';

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
      error,
      isError,
      isLoading,
      match,
      pullRequests: prs,
    } = this.props;
    const { repository } = match.params;

    const pullRequests = prs.map(pr => (
      <CardPullRequest
        key={pr.id}
        title={pr.title}
        body={pr.body}
        username={pr.user.login}
        userAvatar={pr.user.avatar_url}
        urlLink={pr._links.html.href} // eslint-disable-line
        isRepo={false}
        createAt={pr.created_at}
      />
    ));

    return (
      <div>
        <Header title={repository}>
          <FaArrowLeft onClick={() => this.goToHome()} isclickable="true" />
        </Header>
        <div className="content-container">
          {!isLoading && (
            <div className="pull-request">
              {pullRequests}
            </div>
          )}
          {isError && <Error error={error} />}
          {isLoading && <Spinner />}
        </div>
      </div>
    );
  }
}

PRList.defaultProps = {
  error: null,
  history: {},
  isError: false,
  isLoading: false,
  match: {},
  pullRequests: [],
};

PRList.propTypes = {
  error: propTypes.error,
  getPullRequests: propTypes.getPullRequests.isRequired,
  history: propTypes.history,
  isError: propTypes.isError,
  isLoading: propTypes.isLoading,
  match: propTypes.match,
  pullRequests: propTypes.pullRequests,
};

const mapStateToProps = state => ({
  error: state.pullRequests.error,
  isError: state.pullRequests.isError,
  isLoading: state.pullRequests.isLoading,
  pullRequests: state.pullRequests.items,
});

const mapActionsToProps = {
  getPullRequests: (creator, repository) => pullRequestsActions.getPullRequests(creator, repository), // eslint-disable-line
};

export default connect(mapStateToProps, mapActionsToProps)(PRList);
