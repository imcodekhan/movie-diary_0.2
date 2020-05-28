import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "./App";
import userContext from "./sign/userContext";
import Diary from "./diary/Diary";
import axiosMock from "axios";
import SearchWrapper from "./movie/components/SearchWrapper";

afterEach(cleanup);

//snapshot of dom tree

it("snapshot should match", () => {
  const { asFragment } = render(<App />);
  expect(asFragment).toMatchSnapshot();
});

//testing for routers

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("should render homepage", () => {
  const { container, getByTestId } = renderWithRouter(<App />);
  const navbar = getByTestId("navbar");
  const link = getByTestId("movie_diary-link");
  //  expect(container).toMatch("Home page");
  expect(navbar).toContainElement(link);
  console.log(container.contains);
});

//testing context

const renderWithContext = (component) => {
  return {
    ...render(<App value={userContext}>{component}</App>),
  };
};

// it("checks if initial state is equal to 0", () => {
//   const { getByTestId } = renderWithContext(<Diary />);
//   expect(getByTestId("counter")).toHaveTextContent("0");
// });

//testing movie search

jest.mock("axios");
it("should load and display the data", async () => {
  const url = "/mockUrl";
  axiosMock.get.mockResolvedValueOnce({
    data: { mockUrl: "hello from mock url" },
  });
  const { getByTestId } = render(<App url={url} />);
  fireEvent.click(getByTestId("search-button"));
  // const mockData = await waitForElement(() => getByTestId(""));
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});
