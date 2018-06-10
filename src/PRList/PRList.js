import React, { Component } from "react";
import fetch from 'node-fetch';

import PRItem from '../components/PRItem/PRItem';
import './PRList.scss';
import queryString from 'query-string'

class PRList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prList: []
    }
  }

  componentDidMount() {
    const urlParam = queryString.parse(this.props.location.search);
    fetch(`https://api.github.com/repos/${urlParam.q}/pulls`)
      .then(res => res.json())
      .then(json => {
        this.setState({ prList: json });
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
    return (
      <div>
        { this.renderPRList(this.state.prList) }
      </div>
    )
  }

}

export default PRList