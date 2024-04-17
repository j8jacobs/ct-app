import React from "react";
import renderer from "react-test-renderer";

import App from "../app/index";

describe("<App />", () => {
  it("renders", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
