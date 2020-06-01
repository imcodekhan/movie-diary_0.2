import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Diary from "./Diary";

afterEach(cleanup);

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

const context = { user: false };
const hooks = {
  // showNote: false,
  setShowNote: jest.fn(),
  showModal: false,
  setShowModal: jest.fn(),
};

const props = {
  ...hooks,
  favMovies: [],
  handleTabClick: jest.fn(),
  handleDeleteButton: jest.fn(),
  handleNoteSave: jest.fn(),
  ...context,
};

const props1 = {
  ...props,
  favMovies: [
    {
      id: 1,
      fullTitle: "batman",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8CH926UPpZAdx-fpyDdBMAHaDt%26pid%3DApi&f=1",
      watched: false,
      note: "happy netflix",
    },
  ],
};

// console.log(props1.favMovies);w

it("should match non tab snapshot", () => {
  const { asFragment, getByTestId } = renderWithRouter(<Diary {...props} />);
  expect(asFragment).toMatchSnapshot();
  expect(getByTestId("diary-name")).toBeInTheDocument();
});

it("should match tab snapshot", () => {
  const { asFragment, getByText } = renderWithRouter(<Diary {...props1} />);
  expect(asFragment).toMatchSnapshot();
  expect(getByText("edit")).toBeInTheDocument();
});
