import React, { useEffect } from "react";
import { connect } from "react-redux";
import TextTruncate from "react-text-truncate";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadContainer from "../components/container/loadContainer";
import Loader from "react-loader-spinner";
import { getPrFeed } from "../store/actions/getPrFeed";
import Card from "./card/card.js";
import Header from "./card-parts/header";
import Picture from "./picture/picture";
import Title from ".//infos/title.js";
import TitleContainer from "./container/titleContainer";
import GenericInfoContainer from ".//container/genericInfoContainer";
import MiddleOfCard from "./card-parts/middleOfCard";
import GenericInfo from "./infos/genericInfo";
import Button from "./button/button.js";
import Footer from "./card-parts/footer.js";
import TextContainer from "./container/textContainer";
import { goBackToStream } from "../store/actions/goBacktoStream";

function PrFeed(props) {
  useEffect(() => {
    console.log("this is pagepullrequests", props.pagePullRequests);

    props.getPrFeed(
      props.currentRepoOwner,
      props.currentRepo,
      props.pagePullRequests
    );
    window.scrollTo(0, 0);
  }, []);

  const goBackToStream = () => {
    props.goBackToStream();
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={props.pullRequests.length} //This is important field to render the next data
        next={props.getPrFeed.bind(
          this,
          props.currentRepoOwner,
          props.currentRepo,
          props.pagePullRequests
        )}
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
        {props.pullRequests.map((pr, ind) => {
          return (
            <Card key={ind}>
              <Picture src={pr.user.avatar_url} />
              <Header>
                <TitleContainer>
                  <Title primary>{pr.user.login}</Title>
                  <Title>{pr.author_association} </Title>
                </TitleContainer>
              </Header>
              <MiddleOfCard>
                <GenericInfoContainer>
                  <h3>Description</h3>
                  <GenericInfo>{pr.title}</GenericInfo>
                </GenericInfoContainer>
                <h3 style={{ paddingLeft: "2%" }}>PR body</h3>
                <TextContainer>
                  <TextTruncate
                    style={{ paddingLeft: "1%" }}
                    line={2}
                    element="span"
                    truncateText="…"
                    text={pr.body}
                    textTruncateChild={<a href={pr.html_url}>Read on</a>}
                  />
                </TextContainer>
                <GenericInfoContainer>
                  <h3>PR url</h3>
                  <GenericInfo>{pr.html_url}</GenericInfo>
                </GenericInfoContainer>
              </MiddleOfCard>
              <Footer>
                <GenericInfoContainer buttonContainer>
                  <Button
                    onClick={() => {
                      goBackToStream();
                    }}
                  >
                    <h2>Go Back to Repos Stream</h2>
                  </Button>
                </GenericInfoContainer>
              </Footer>
            </Card>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getPrFeed: (ownerOfRepo, repo, page) => {
      dispatch(getPrFeed(ownerOfRepo, repo, page));
    },
    goBackToStream: () => {
      dispatch(goBackToStream());
    }
  };
};

const MapStateToProps = state => {
  return {
    pullRequests: state.pullRequests,
    currentRepoOwner: state.currentRepoOwner,
    currentRepo: state.currentRepo,
    pagePullRequests: state.pagePullRequests
  };
};

export default connect(MapStateToProps, mapDispatchToProps)(PrFeed);
