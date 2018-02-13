import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPullRequests } from "../../actions/git_action";

import Header from "../header/Header";
import Errors from "../errors/Errors";
import PullRequestItem from './PullRequestItem'

import styled from "styled-components";

const PullRequestsWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`;

class PullRequests extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Pass creator and repo
    const { creator, repo } = this.props.params;
    this.props.fetchPullRequests(creator, repo);
  }

  renderPullRequests() {
      const { pullRequests } = this.props;
      const { creator, repo } = this.props.params;
      return pullRequests.map((pullRequest, index) => {
          return (
              <PullRequestItem key={index} pullRequest={pullRequest} creator={creator} repo={repo}/>
          );
      });
  }

  render() {
    const { messageError, fetching} = this.props;
    const { repo } = this.props.params;

    return (
      <div>
        <Header title={`${repo}`} initialPage/>
        <PullRequestsWrapper>
          {messageError || fetching ? (
            <Errors messageError={messageError} />
          ) : (
            <div style={{ width: '100%'}}>{this.renderPullRequests()}</div>
          )}
        </PullRequestsWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pullRequests: state.git.pullRequests,
    fetching: state.git.fetching,
    messageError: state.git.messageError
  };
};

export default connect(mapStateToProps, { fetchPullRequests })(PullRequests);
