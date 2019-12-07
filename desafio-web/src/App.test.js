import React from "react";
import { shallow } from "enzyme";
import TopBanner from "./components/banner/topBanner";
import PrFeed from "./components/PrFeed";
import GitFeed from "./components/GitFeed";
import styled from "styled-components";
import "jest-styled-components";

test("renders top banner", () => {
  const wrapper = shallow(<GitFeed />);
  console.log(wrapper.length);
});
