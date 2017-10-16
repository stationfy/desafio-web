import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from 'react-infinite-scroller';
import PullRequest from '../../components/PullRequest/'

class PullRequestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  
  componentDidMount() {
    fetch(`https://api.github.com/repos/facebook/react/pulls`, {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((responseJson) => {
      console.log(responseJson);
      this.setState({
	items: responseJson,
      });
    }).catch((err) => {
      // Error :(
    });
  }
  
  render() {
    return (
      <div>
	{this.state.items.map((i)=>
	  <PullRequest {...i.user} {...i}/>
	)}
      </div>
    );
  }
};

export default PullRequestContainer
