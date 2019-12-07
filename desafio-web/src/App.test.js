import React from "react";
import { shallow } from "enzyme";
import TopBanner from "./components/banner/topBanner";

it("renders without crashing", () => {
  const wrapper = shallow(<TopBanner />);
});
