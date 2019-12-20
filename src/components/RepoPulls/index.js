import React, { useEffect } from "react";
import { Container, Title, SubTitle, Content } from "./styles";
import { getInfoFromPath, getPullsByState } from "../../utils/pulls";
import { fetchPulls } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../../components/ListItem";

const RepoPulls = ({ history }) => {
  const dispatch = useDispatch();
  const info = getInfoFromPath(window.location.pathname);
  const { pulls, error, empty } = useSelector(state => state.repopulls);

  useEffect(() => {
    dispatch(fetchPulls(info));
  }, []);

  const getPulls = () => pulls.map(pull => (
    <ListItem key={pull.id} type="pull" {...pull}/>
  ));

  const getContent = () => {
    if (empty) {
      return (
        <h2>No results found.</h2>
      );
    }

    if (error) {
      return (
        <h2>Something went wrong :/</h2>
      );
    }

    return (
      <div>
        <p>Results found: {getPullsByState(pulls, "open").length} open/ {getPullsByState(pulls, "closed").length} closed</p>
        {getPulls()}
      </div>
    )
  }

  return (
    <Container>
      <Title>{info.repo}</Title>
      <SubTitle>from <b>{info.creator}</b></SubTitle>
      <Content>
        {getContent()}
      </Content>
      </Container>
  );
}

export default RepoPulls;