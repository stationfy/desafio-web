import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Repository from '../../components/Repository/'

class RepositoryContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: [],
    };
  }
  
  loadItems(page) {
    fetch(`https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=${page}`, {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((responseJson) => {
      this.setState({
	items: this.state.items.concat(responseJson.items),
      });
      console.log(responseJson);
    }).catch((err) => {
      console.log(err)
    });
  }
  
  render() {
    const loader = <div className="loader">Loading ...</div>;
    
    var items = [];
    this.state.items.map((i, k) => 
      items.push(
	<Repository {...i} {...i.owner} key={k}/>
      )
    );
    
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems.bind(this)}
        hasMore={true}
        loader={loader}>

        {items}

      </InfiniteScroll>
    );
  }
};

export default RepositoryContainer
