import React, { Component } from "react";
import fetch from 'node-fetch';

import RepoItem from '../components/RepoItem/RepoItem';
import './Home.css';

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
        alert(`${error} GitHub is down! PS: It's a M$ feature, please move to GitLab ou BitBucket.`)
      });
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

  render() {
    return (
      <div className="content home">
        { this.renderRepoList(this.state.repoList) }
      </div>
    )
  }

}

export default Home;