import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ReposActions } from "../../store/ducks/repos.ducks";

import Loading from "../../components/Loading/Loading";
import Card from "../../components/Card/Card";

import { Container } from "./Styles";
import Header from "../../components/Header/Header";

const ReposPage = ({ repos, getRequest, getMoreRequest }) => {
  useEffect(() => {
    if (!repos.length) {
      getRequest();
    }
  }, []);

  const loadMoreItems = page => {
    if (!repos.loading && repos.length !== 0) {
      getMoreRequest(page);
    }
  };

  return (
    <Container>
      <Header>Github JavaPop</Header>
      <InfiniteScroll
        element={"section"}
        pageStart={1}
        loadMore={page => loadMoreItems(page)}
        threshold={1000}
        hasMore={!repos.loading && repos.length !== 0}
      >
        {repos.data.map(repo => (
          <Card key={repo.id} repo={repo} />
        ))}
      </InfiniteScroll>
      {repos.loading && <Loading />}
    </Container>
  );
};

const mapStateToProps = state => ({
  repos: state.repos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ReposActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReposPage);
