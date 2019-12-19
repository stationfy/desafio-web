import React, { useEffect, useState } from "react";
import { fetchRepos } from "./actions";
import { SORT_OPTIONS, ORDER_OPTIONS } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, Wrapper, Select, Label, Content, List } from "./styles";
import Header from "../Header/index";
import Repo from "../ListItem/index";

const Search = () => {
  const dispatch = useDispatch();
  const [queryString, setQueryString] = useState("Javascript");
  const [sort, setSort] = useState("stars");
  const [ loading, setLoading ] = useState(false);
  const [order, setOrder] = useState("desc");
  const [request, setRequest] = useState(false);
  const { repos, empty, error, page } = useSelector(state => state.home);

  
  const makeInfiniteScroll = () => {
    window.addEventListener('scroll', async (e) => {
      if ((window.pageYOffset + window.innerHeight) >= document.body.scrollHeight){
        setRequest(true);
      }
    });
  };

  useEffect(() => {
    searchRepos(request)
    setRequest(false);
  }, [request]);

  useEffect(() => {
    searchRepos(true)
    makeInfiniteScroll();
  }, []);

  const getOptions = (options) =>
    options.map(o => (
      <option key={o.value} value={o.value}>{o.display}</option>
    ));

  const getSortOptions = getOptions(SORT_OPTIONS);
  const getOrderOptions = getOptions(ORDER_OPTIONS);

  const searchRepos = (shouldRequest) => {
    if (shouldRequest) {
      return dispatch(fetchRepos({
        queryString,
        page,
        sort,
        order
      }));
    }
  };

  const getRepos = () => {
    if (repos.items) {
      return repos.items.map(i => (
        <Repo key={i.id} type="repo" {...i}/>
      ))
    }
  }
  
  const getContent = () => {
    if (empty) {
      return (<h2>No results found.</h2>)
    }

    if (error) {
      return (<h2>Something went wrong :(</h2>)
    }

    return (
      <List>
        <p>Results found: <b>{repos.total_count}</b></p>
        {getRepos()}
      </List>
    )
  }

  return (
    <Wrapper id="list" >
      <Header>
        <TextInput 
          placeholder="Keyword"
          value={queryString}
          onChange={e => setQueryString(e.target.value)}
        />
      </Header>
      <Content>
        {getContent()}
      </Content>
    </Wrapper>
  )
}

export default Search;