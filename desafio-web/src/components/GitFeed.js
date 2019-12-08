import React, { useEffect } from "react";
import { getRepos } from "../store/actions/getRepos";
import { getPrFeed } from "../store/actions/getPrFeed";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./card/card.js";
import Container from "./container/container.js";
import Header from ".//card-parts/header.js";
import Picture from ".//picture/picture.js";
import Title from ".//infos/title.js";
import TitleContainer from "./container/titleContainer";
import GenericInfoContainer from ".//container/genericInfoContainer";
import MiddleOfCard from "./card-parts/middleOfCard";
import GenericInfo from "./infos/genericInfo";
import Button from "./button/button.js";
import Footer from "./card-parts/footer.js";
import Loader from "react-loader-spinner";
import LoadContainer from "../components/container/loadContainer";

function GitFeed(props) {
  useEffect(() => {
    props.getRepos(props.pageRepos);
    window.scrollTo(0, 0);
  }, []);

  const fetchPullRequests = (ownerOfRepo, repo) => {
    ownerOfRepo = ownerOfRepo.split("/")[0];
    props.getPrFeed(ownerOfRepo, repo, props.pagePullRequests);
  };

  // Cada repositório deve exibir Nome do repositório, Descrição do Repositório, Nome / Foto do autor, Número de Stars, Número de Forks

  return (
    <div>
      <InfiniteScroll
        dataLength={props.repos.length} //This is important field to render the next data
        next={props.getRepos.bind(this, props.pageRepos)}
        hasMore={true}
        loader={
          <LoadContainer>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </LoadContainer>
        }
      >
        <Container>
          {props.repos.map((repo, ind) => {
            return (
              <Card key={ind}>
                <Picture src={repo.owner.avatar_url} />
                <Header>
                  <TitleContainer>
                    <Title primary>{repo.full_name}</Title>
                    <Title>{repo.watchers_count} stars</Title>
                  </TitleContainer>
                </Header>
                <MiddleOfCard>
                  <GenericInfoContainer>
                    <h3>Description</h3>
                    <GenericInfo>{repo.description}</GenericInfo>
                  </GenericInfoContainer>
                  <GenericInfoContainer>
                    <h3>Name of Author: </h3>
                    <GenericInfo>{repo.name}</GenericInfo>
                  </GenericInfoContainer>
                  <GenericInfoContainer>
                    <h3>Total Star Count: </h3>
                    <GenericInfo>{repo.watchers_count}</GenericInfo>
                  </GenericInfoContainer>
                  <GenericInfoContainer>
                    <h3>Total Number of Forks: </h3>
                    <GenericInfo>{repo.forks_count}</GenericInfo>
                  </GenericInfoContainer>
                </MiddleOfCard>
                <Footer>
                  <GenericInfoContainer buttonContainer>
                    <Button
                      onClick={fetchPullRequests.bind(
                        this,
                        repo.full_name,
                        repo.name,
                        props.pagePullRequests
                      )}
                    >
                      <h2>Check Pull Requests</h2>
                    </Button>
                  </GenericInfoContainer>
                </Footer>
              </Card>
            );
          })}
        </Container>
      </InfiniteScroll>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    //passar o parametro page;
    getRepos: page => {
      dispatch(getRepos(page));
    },
    getPrFeed: (ownerOfRepo, repo, page) => {
      dispatch(getPrFeed(ownerOfRepo, repo, page));
    }
  };
};

const MapStateToProps = state => {
  return {
    repos: state.repos,
    pageRepos: state.pageRepos,
    pagePullRequests: state.pagePullRequests
  };
};

export default connect(MapStateToProps, mapDispatchToProps)(GitFeed);
