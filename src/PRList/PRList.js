import React, { Component } from "react";
import fetch from 'node-fetch';
import queryString from 'query-string';

import Header from '../components/Header/Header';
import PRListStatus from '../components/PRListStatus/PRListStatus';
import PRItem from '../components/PRItem/PRItem';
import './PRList.css';

class PRList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prList: [],
      openedprs: 0,
      closedprs: 0
    }
  }

  componentDidMount() {
    const urlParam = queryString.parse(this.props.location.search);
    fetch(`https://api.github.com/repos/${urlParam.q}/pulls`)
      .then(res => res.json())
      .then(json => {
        this.setState({ prList: json });
        this.setState({ openedprs: json.length });
        fetch(`https://api.github.com/repos/${urlParam.q}/pulls?state=closed`)
          .then(res => res.json())
          .then(json => {
            let closedPrs = json.length;
            this.setState({ closedprs: closedPrs })
          })
          .catch(error => {
            alert(`GitHub is down! PS: It's a M$ feature, please move to GitLab ou BitBucket.`)
          });
      })
      .catch(error => {
        alert(`GitHub is down! PS: It's a M$ feature, please move to GitLab ou BitBucket.`)
      });
  }

  renderPRItem(item) {
    const urlParam = queryString.parse(this.props.location.search);
    return (
      <PRItem key={ item.id } data={ item } fullName={ urlParam }/>
    )
  }

  renderPRList(list) {
    return list.map(item => this.renderPRItem(item));
  }

  render() {
    const urlParam = queryString.parse(this.props.location.search);
    return (
      <div>
        <Header reponame={ urlParam.q } />
        <PRListStatus openedprs={ this.state.openedprs }
                      closedprs={ this.state.closedprs } /> 
        <div className="content prlist">
          { this.renderPRList(this.state.prList) }
        </div>
      </div>
    )
  }

}

export default PRList