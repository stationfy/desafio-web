import React, { Component } from 'react';
import './index.css';
import Fork from 'react-icons/lib/fa/code-fork'
import Star from 'react-icons/lib/fa/star'
import Repository from '../../components/Repository/'

class RepositoryContainer extends Component{

  constructor(){
    super();
    this.state = {
      repoName: '',
      forkNumber: 0,
      starNumber: 0,
      ownerName:'',
      avatarUrl:''
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
	repoName: responseJson.items[0].name,
	repoDesc: responseJson.items[0].description,
	forkNumber: responseJson.items[0].forks,
	starNumber: responseJson.items[0].stargazers_count,
	ownerName: responseJson.items[0].owner.login,
	avatarUrl: responseJson.items[0].owner.avatar_url
      });
    }).catch((err) => {
      // Error :(
    });
  }

  render(){
    return(
      <div>
        <Repository {...this.state} />
      </div>
    );
  }

};

export default RepositoryContainer;
