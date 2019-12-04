import React, { useEffect } from "react";
import PropTypes from "prop-types";

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

PullPage.propTypes = {
  getRequest: PropTypes.func.isRequired,
  login: PropTypes.string,
  name: PropTypes.string,
  pulls: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        pull: PropTypes.object
      })
    )
  }).isRequired
};

const mapStateToProps = state => ({
  pulls: state.pullRequests
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PullActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PullPage);
