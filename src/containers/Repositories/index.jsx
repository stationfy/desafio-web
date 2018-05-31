import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import Header from '../../core/components/Header';
import Icon from '../../core/components/Icon';
import Card from '../../core/components/Card';
import CardFooter from '../../core/components/Card/CardFooter';
import CardRight from '../../core/components/Card/CardRight';
import RepositoriesService from '../../services/RepositoriesService';
import { RepositoryActions } from '../../state/actions/repositoriesActions';

class Repositories extends Component {
  componentWillMount() {
    const { fetchingRepos, setRepositories } = this.props;
    const Api = new RepositoriesService();

    fetchingRepos(true);
    Api
      .all({ q: 'language:Javascript', sort: 'stars', page: 1 })
      .then(data => setRepositories(_.get(data, 'data.items')))
      .finally(() => fetchingRepos(false));
  }
  renderRepositories() {
    const { repositories } = this.props;

    return repositories
      .map(repository => (
        <Card title={repository.name} body={repository.description} key={repository.id}>
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
          {loading ? 'loading' : this.renderRepositories()}
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
