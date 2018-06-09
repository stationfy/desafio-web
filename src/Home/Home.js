import React, { Component } from "react";
import fetch from 'node-fetch';

import RepoItem from '../components/RepoItem';
import './Home.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repoList: []
    }
  }

  componentDidMount() {
    fetch(`https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=1`)
    .then(res => res.json())
    .then(json => {
      this.setState({ repoList: json });
    })
    .catch(error => {
      alert(`GitHub is now running on Azure, please move to GitLab ou BitBucket.`)
    });
  }

  renderRepoItem(item) {
    return (
      <RepoItem data={item} />
    )
  }

  renderRepoList(list) {
    return list.map(item => this.renderRepoItem(item));
  }

  render() {
    return (
      <div>
        { renderRepoList(this.state.repoList) }
      </div>
    )
  }

}

export default Home;