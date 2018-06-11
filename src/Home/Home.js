import React, { Component } from "react";
import fetch from 'node-fetch';
import InfiniteScroll from 'react-infinite-scroller';

import RepoItem from '../components/RepoItem/RepoItem';
import Header from '../components/Header/Header';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repoList: [],
      shouldCallAgain: true
    }
  }

  renderRepoItem(item) {
    return (
      <RepoItem key={ item.id } data={ item } />
    );
  }

  renderRepoList(list) {
    if (list.items) {
      return list.items.map(item => this.renderRepoItem(item));
    } else {
      return (<p></p>);
    }
  }

  renderMoreRepos(page) {
    let self = this;
    fetch(`https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=${page}`)
      .then(res => res.json())
      .then(json => {
        let newRepoList = self.state.repoList;
        if(newRepoList.items) {
          json.items.map(item => {
            if (!newRepoList.items.find(newRepoItem => newRepoItem.id===item.id)){
              newRepoList.items.push(item);
            } 
          }) 
          self.setState({ repoList: newRepoList});
        } else {
          self.setState({ repoList: json});
        }
      })
      .catch(error => {
        this.setState({ shouldCallAgain: false });
        alert(`${error} GitHub is down! PS: It's a M$ feature, please move to GitLab ou BitBucket.`)
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div id="repoList" className="content home">
          <InfiniteScroll
            pageStart={0}
            loadMore={this.renderMoreRepos.bind(this)}
            hasMore={this.state.shouldCallAgain}
            loader={<div className="loader" key={0}>Loading ...</div>}>
            { this.renderRepoList(this.state.repoList) }
          </InfiniteScroll>
        </div>
      </div>
    )
  }

}

export default Home;