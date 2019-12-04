import React, { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PullActions } from "../../store/ducks/pullRequests.ducks";

import Header from "../../components/Header/Header";
import PullCard from "../../components/PullCard/PullCard";
import Loading from "../../components/Loading/Loading";

import { Container } from "./Styles";

const PullPage = props => {
  const { login, name } = props.match.params;
  const { getRequest, pulls } = props;
  useEffect(() => {
    getRequest({ login, name });
  }, []);

  return (
    <Container>
      <Header isPull>{name}</Header>
      <section>
        {pulls.loading ? (
          <Loading />
        ) : (
          pulls.data.map(pull => <PullCard key={pull.id} pull={pull} />)
        )}
      </section>
    </Container>
  );
};

const mapStateToProps = state => ({
  pulls: state.pullRequests
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PullActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PullPage);
