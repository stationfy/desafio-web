import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router';
import InfiniteScroll from 'react-infinite-scroller';
import { Card, Header, Icon, CardFooter, CardRight, ContentLoader, InfiniteLoader } from '../../core/components/';
import RepositoriesService from '../../services/RepositoriesService';
import { RepositoryActions } from '../../state/actions/repositoriesActions';

class Repositories extends Component {
  componentWillMount() {
    this.fetchRepos();
  }

  fetchRepos(page = 1) {
    const { fetchingRepos, setRepositories } = this.props;
    const Api = new RepositoriesService();

    if (page === 1) fetchingRepos(true);
    Api
      .all({ q: 'language:Javascript', sort: 'stars', page })
      .then(data => setRepositories(_.get(data, 'data.items')))
      .finally(() => fetchingRepos(false));
  }

  renderRepositories() {
    const { repositories } = this.props;

    return repositories
      .map(repository => (
        <Link href="/" to={{ pathname: `/pulls/${repository.owner.login}/${repository.name}` }} key={repository.id}>
          <Card
            title={repository.name}
            body={_.truncate(repository.description, {
              length: 60,
              separator: ' ',
              omission: '...',
            })}
          >
            <CardRight>
              <div className="user-content">
                <img className="avatar-image" src={repository.owner.avatar_url} alt="User" />
                <h3 className="blue-text">{repository.owner.login}</h3>
                <p className="light-gray-text">Nome Sobrenome</p>
              </div>
            </CardRight>
            <CardFooter>
              <section className="yellow-text"><Icon icon="code-branch" /> {repository.forks}</section>
              <section className="yellow-text"><Icon icon="star" /> {repository.stargazers_count}</section>
            </CardFooter>
          </Card>
        </Link>
      ));
  }

  render() {
    const { loading } = this.props;
    return (
      <Fragment>
        <Header>
          <div className="flex-child header-item">
            <Icon icon="bars" />
          </div>
          <div className="flex-child header-item">
            <h1 className="title">
              Javascript Top Repositories
            </h1>
          </div>
        </Header>
        <div className="content">
          <InfiniteScroll
            hasMore
            pageStart={1}
            loadMore={page => this.fetchRepos(page)}
            loader={<InfiniteLoader />}
            key={0}
          >
            {loading ? <ContentLoader /> : this.renderRepositories()}
          </InfiniteScroll>
        </div>
      </Fragment>
    );
  }
}

Repositories.defaultProps = {
  repositories: [],
};

Repositories.propTypes = {
  repositories: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  fetchingRepos: PropTypes.func.isRequired,
  setRepositories: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapActionsToProps = {
  fetchingRepos: payload => RepositoryActions.setLoading(payload),
  setRepositories: payload => RepositoryActions.setRepositories(payload),
};

const mapStateToProps = state => ({
  repositories: _.get(state, 'repositories.edges'),
  loading: _.get(state, 'repositories.isLoading'),
});

export default connect(mapStateToProps, mapActionsToProps)(Repositories);
