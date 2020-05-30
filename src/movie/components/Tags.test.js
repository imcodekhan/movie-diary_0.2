import React from "react";
import { render, cleanup } from "@testing-library/react";
import Tags from "./Tags";

afterEach(cleanup);

it("should match snapshot", () => {
  const { asFragment } = render(<Tags />);
  expect(asFragment).toMatchSnapshot();
});

describe("should render all buttons", () => {
  it("should render top 250 movies button ", () => {
    const { getByText } = render(<Tags />);
    expect(getByText("top 250 movies").innerHTML).toMatch("top 250 movies");
  });
  it("should render top 250 tv shows button ", () => {
    const { getByText } = render(<Tags />);
    expect(getByText("top 250 tv shows").innerHTML).toMatch("top 250 tv shows");
  });
  it("should render Most popular Movies button ", () => {
    const { getByText } = render(<Tags />);
    expect(getByText("Most popular Movies").innerHTML).toMatch(
      "Most popular Movies"
    );
  });
  it("should render Most Popular Tv shows button ", () => {
    const { getByText } = render(<Tags />);
    expect(getByText("Most Popular Tv shows").innerHTML).toMatch(
      "Most Popular Tv shows"
    );
  });
});
