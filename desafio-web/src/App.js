import React from "react";
import GitFeed from "./components/GitFeed.js";
import { connect } from "react-redux";
import PrFeed from "./components/PrFeed.js";
import TopBanner from "./components/banner/topBanner";

export function App(props) {
  console.log("these are props in app", props);
  return (
    <div>
      <TopBanner>
        <h1 style={{ padding: "0" }}>Most Popular JS Repos!</h1>
      </TopBanner>
      {props.showPrFeed ? <PrFeed /> : <GitFeed />}
    </div>
  );
}

const MapStateToProps = state => {
  console.log("this is the state", state);
  return {
    showPrFeed: state.showPrFeed
  };
};

export default connect(MapStateToProps, null)(App);
