import React, { Component } from "react";
import fetch from 'node-fetch';

import PRItem from '../components/PRItem';
import './PRList.scss';

class PRList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prList: []
    }
  }

  componentDidMount() {
    const data = { ...this.props };
    fetch(`https://api.github.com/repos/${data.user}/${data.repository}/pulls`)
      .then(res => res.json())
      .then(json => {
        this.setState({ prList: json });
      })
      .catch(error => {
        alert(`GitHub is now running on Azure, please move to GitLab ou BitBucket.`)
      });
  }

  renderRepoItem(item) {
    return (
      <PRItem data={item} />
    )
  }

  renderPRList(list) {
    return list.map(item => this.renderPRItem(item));
  }

  render() {
    return (
      <div>
        { renderRepoList(this.state.prList) }
      </div>
    )
  }

}

export default PRList