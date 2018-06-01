import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router';
import { Card, Header, Icon, CardFooter, ContentLoader } from '../../core/components/';
import RepositoriesService from '../../services/RepositoriesService';
import { PullRequestsActions } from '../../state/actions/pullRequestActions';

class Repositories extends Component {
  componentWillMount() {
    const { fetchingPullRequests, setPullRequests, params } = this.props;
    const { creator, repository } = params;
    const Api = new RepositoriesService();

    fetchingPullRequests(true);
    Api
      .one(creator, repository)
      .then(data => setPullRequests(_.get(data, 'data')))
      .finally(() => fetchingPullRequests(false));
  }

  renderPullRequests() {
    const { pullRequests } = this.props;

    return pullRequests
      .map(pr => (
        <Card
          title={pr.title}
          body={_.truncate(pr.body, {
            length: 60,
            separator: ' ',
            omission: '...',
          })}
          key={pr.id}
          contentSize={90}
        >
          <CardFooter>
            <div className="user-inline">
              <div>
                <img className="avatar-image" src={pr.user.avatar_url} alt="User" />
              </div>
              <div>
                <h3 className="blue-text">{pr.user.login}</h3>
                <p className="light-gray-text">Nome Sobrenome</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      ));
  }

  render() {
    const { loading, params } = this.props;
    const { creator, repository } = params;
    return (
      <Fragment>
        <Header>
          <div className="flex-child header-item">
            <Link href="/" to={{ pathname: '/' }} key={repository.id}>
              <Icon icon="arrow-left" />
            </Link>
          </div>
          <div className="flex-child header-item">
            <h1 className="title">
              {`Pull requests of ${creator}/${repository}`}
            </h1>
          </div>
        </Header>
        <div className="content">
          {loading ? <ContentLoader /> : this.renderPullRequests()}
        </div>
      </Fragment>
    );
  }
}

Repositories.defaultProps = {
  pullRequests: [],
};

Repositories.propTypes = {
  pullRequests: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  params: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  fetchingPullRequests: PropTypes.func.isRequired,
  setPullRequests: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapActionsToProps = {
  fetchingPullRequests: payload => PullRequestsActions.setLoading(payload),
  setPullRequests: payload => PullRequestsActions.setPullRequests(payload),
};

const mapStateToProps = state => ({
  pullRequests: _.get(state, 'pullRequests.edges'),
  loading: _.get(state, 'pullRequests.isLoading'),
});

export default connect(mapStateToProps, mapActionsToProps)(Repositories);
