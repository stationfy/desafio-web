import React, { useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroller";

import { connect } from "react-redux";
import { fetchReposRequest } from "../../store/modules/repos/actions";

import Loading from "../../components/Loading";
import Repo from "../../components/Repo";

import { Container } from "./Styles";

const ReposPage = ({ repos, fetchReposRequest }) => {
  useEffect(() => {
    if (!repos.length) {
      fetchReposRequest(1);
    }
  }, [fetchReposRequest, repos.length]);

  const fetchMoreRepos = page => {
    if (!repos.loading && repos.length !== 0) {
      fetchReposRequest(page);
    }
  };

  return (
    <Container>
      <InfiniteScroll
        element={"section"}
        pageStart={1}
        loadMore={page => fetchMoreRepos(page)}
        threshold={1000}
        hasMore={!repos.loading && repos.length !== 0}
      >
        {repos.data && repos.data.map(repo => (
          <Repo key={repo.id} repo={repo} />
        ))}
        {repos.loading && <Loading />}
      </InfiniteScroll>
    </Container>
  );
};

ReposPage.propTypes = {
  fetchReposRequest: PropTypes.func.isRequired,
  repos: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number
    }))
  }).isRequired
};

const mapStateToProps = state => ({
  repos: state.repos
});

const mapDispatchToProps = {
  fetchReposRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposPage);
