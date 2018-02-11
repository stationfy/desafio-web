import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRepositories } from "../../actions/git_action";

import InfiniteScroll from "react-infinite-scroller";
import RepositoryItem from "./RepositoryItem";
import Header from "../header/Header";
import LoadingInfiniteScroll from "../loader/LoadingInfiniteScroll.js";
import Errors from '../errors/Errors';

import styled from "styled-components";

const RepositoryWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;

`;

class Repository extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const { items } = nextProps.repositories;

    const arrayItems = this.state.items.concat(items);
    this.setState({ items: arrayItems });
  }

  renderRepositories() {
    const { items } = this.state;

    return items.map((repository, index) => {
      return <RepositoryItem key={index} repository={repository} />;
    });
  }

  render() {
    const loader = <LoadingInfiniteScroll key={1} />;

    return (
      <div >
        <Header />
        <RepositoryWrapper>
          {this.props.messageError ? (
            <Errors messageError={this.props.messageError}/>
          ) : (
            <InfiniteScroll
              pageStart={0}
              loadMore={this.props.fetchRepositories}
              hasMore={true}
              loader={loader}
              style={{ width: '100%'}}
            >
              {this.renderRepositories()}
            </InfiniteScroll>
          )}
        </RepositoryWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repositories: state.git.repositories,
    messageError: state.git.messageError
  };
};

export default connect(mapStateToProps, { fetchRepositories })(Repository);
