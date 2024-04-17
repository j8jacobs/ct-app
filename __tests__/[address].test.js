import React from "react";
import renderer from "react-test-renderer";
import AddressPage from "../app/address/[address]";
import { useLocalSearchParams } from "expo-router";

describe("<AddressPage />", () => {
  beforeEach(() => {
    useLocalSearchParams.mockReturnValue({
      address: "3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd",
      final_balance: 1.0001,
      n_tx: 50,
    });
  });
  it("renders", () => {
    const tree = renderer.create(<AddressPage />).toJSON();
    expect(tree.children.length).toBe(3);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<AddressPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
