import React from "react";
import SearchWrapper from "./SearchWrapper";
import { cleanup, render, fireEvent } from "@testing-library/react";

afterEach(cleanup);

const props = {
  handleChange: jest.fn(),
  handleSearchButton: jest.fn(),
  movieSearched: "",
  handleTagClick: jest.fn(),
};

const event = {
  target: {
    value: "kidding",
  },
};
it("should match snapshot", () => {
  const { asFragment, getByText } = render(<SearchWrapper {...props} />);
  expect(asFragment).toMatchSnapshot();
  expect(getByText("top 250 movies")).toBeInTheDocument();
  expect(getByText("top 250 tv shows")).toBeInTheDocument();
  expect(getByText("Most popular Movies")).toBeInTheDocument();
  expect(getByText("Most Popular Tv shows")).toBeInTheDocument();
});

// it("should change value on change", () => {
//   props.handleChange.mockClear();
//   const { getByTestId } = render(<SearchWrapper {...props} />);
//   fireEvent.input(getByTestId("input-flag"), event);
//   expect(props.handleChange).toHaveBeenCalledWith("kidding");
// });

it("should call handleSearchButton on click", () => {
  props.handleSearchButton.mockClear();
  const { getByTestId } = render(<SearchWrapper {...props} />);
  fireEvent.click(getByTestId("search-button"));
  expect(props.handleSearchButton).toHaveBeenCalledTimes(1);
});
