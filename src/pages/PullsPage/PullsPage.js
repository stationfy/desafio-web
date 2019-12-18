import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchPullsRequest } from "../../store/modules/pulls/actions";

import PullRequest from "../../components/PullRequest";
import Loading from "../../components/Loading";

import { Container } from "./Styles";

const PullPage = ({ pulls, fetchPullsRequest, match }) => {
  const { login, name } = match.params;
  
  useEffect(() => {
    fetchPullsRequest({ login, name });
  }, [fetchPullsRequest, login, name]);
  
  return (
    <Container>
      <section>
        {pulls.loading ? (
          <Loading />
        ) : (
          pulls.data && pulls.data.map(pull => <PullRequest key={pull.id} pull={pull} />)
        )}
      </section>
    </Container>
  );
};

PullPage.propTypes = {
  fetchPullsRequest: PropTypes.func.isRequired,
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
  pulls: state.pulls
});

const mapDispatchToProps = {
  fetchPullsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(PullPage);
