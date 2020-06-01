import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import MovieCard from "./MovieCard";

afterEach(cleanup);
const context1 = {
  loginStatus: true,
};
const context2 = {
  loginStatus: false,
};
const props1 = {
  id: 1,
  image: "url.com",
  title: "batman",
  handleHeartButton: jest.fn(),
  favMovies: [],
  crew: "niam leeson",
  rating: 4.2,
  history: { push: jest.fn() },
  ...context1,
};

const props2 = {
  ...props1,
  ...context2,
};

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("should match snapshot", () => {
  const { asFragment } = renderWithRouter(<MovieCard {...props1} />);
  expect(asFragment).toMatchSnapshot();
});

it("should call handleHeartButton on clicking  loginStatus div ", () => {
  props1.handleHeartButton.mockClear();
  const { getByTestId } = renderWithRouter(<MovieCard {...props1} />);
  fireEvent.click(getByTestId("movie-card-flag"));
  expect(props1.handleHeartButton).toHaveBeenCalledWith(
    props1.id,
    props1.title,
    props1.image
  );
});

// it("should history.push on clicking  loginStatus div ", () => {
//   props2.history.push.mockClear();
//   const { getByTestId } = renderWithRouter(<MovieCard {...props2} />);
//   fireEvent.click(getByTestId("movie-card-flag"));
//   //   expect(props2.history).toHaveBeenCalledWith("/login");
//   console.log(props2.history.push);
// });
