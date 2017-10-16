import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from 'react-infinite-scroller';
import PullRequest from '../../components/PullRequest/'
import {connect} from 'react-redux';

class PullRequestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  //facebook - state.owner
  //react    - state.project
  componentDidMount() {
    fetch(`https://api.github.com/repos/${this.props.list.owner}/${this.props.list.project}/pulls`, {
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

let mapStateToProps = (state) =>{
  return {
    list: state
  }
}

export default connect(mapStateToProps)(PullRequestContainer);
