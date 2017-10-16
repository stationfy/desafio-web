import React, { Component } from 'react';
import './index.css';
import Fork from 'react-icons/lib/fa/code-fork'
import Star from 'react-icons/lib/fa/star'
import Repository from '../../components/Repository/'

class RepositoryContainer extends Component{

  constructor(){
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount(){
    const _this = this;
    fetch('https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=2', {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((responseJson) => {
      console.log(responseJson.items[0]);
      this.setState({
	items: responseJson.items
      });
    }).catch((err) => {
      // Error :(
    });
  }

  render(){
    return(
      <div>
	{this.state.items.length == 0 ?<p>wait</p> :this.state.items.map((i)=>
	  <Repository {...i} {...i.owner} />
	)}
      </div>
    );
  }

};

export default RepositoryContainer;
