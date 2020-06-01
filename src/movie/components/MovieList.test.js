import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import MovieList from "./MovieList";

afterEach(cleanup);

const props = {
  defaultMovies: [
    {
      id: 1,
      fullTitle: "batman",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8CH926UPpZAdx-fpyDdBMAHaDt%26pid%3DApi&f=1",
      watched: false,
      note: "happy netflix",
    },
  ],
  searchedMovies: [],
  handleHeartButton: jest.fn(),
  favMovies: [],
};

const props1 = {
  ...props,
  searchedMovies: [
    {
      id: 1,
      fullTitle: "joker",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8CH926UPpZAdx-fpyDdBMAHaDt%26pid%3DApi&f=1",
      watched: false,
      note: "happy netflix",
    },
  ],
};

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("should match snapshot", () => {
  const { asFragment, getByAltText } = renderWithRouter(
    <MovieList {...props} />
  );
  expect(asFragment).toMatchSnapshot();
  expect(getByAltText(props.defaultMovies[0].fullTitle)).toBeInTheDocument();
});

describe("should  render", () => {
  it("default  movies", () => {
    const { getByText } = renderWithRouter(<MovieList {...props} />);
    expect(getByText(props.defaultMovies[0].fullTitle).innerHTML).toMatch(
      "batman"
    );
  });
  it("searched  movies", () => {
    const { getByText } = renderWithRouter(<MovieList {...props1} />);
    expect(getByText(props1.searchedMovies[0].fullTitle).innerHTML).toMatch(
      "joker"
    );
  });
});
