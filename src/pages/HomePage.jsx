import React, { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ReposActions } from "../store/ducks/repos.ducks";

import Loading from "../components/Loading/Loading";
import Card from "../components/Card/Card";

import { Container } from "./Styles";

const HomePage = ({ repos, getRequest }) => {
  useEffect(() => {
    getRequest();
  }, []);

  return (
    <Container>
      {repos.loading ? (
        <Loading />
      ) : (
        repos.data.map(repo => <Card key={repo.id} repo={repo} />)
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  repos: state.repos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ReposActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
