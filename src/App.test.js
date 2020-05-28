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
import Login from "./sign/Login";

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
  expect(container.firstChild).toHaveTextContent("top 250 movies");
  expect(navbar).toContainElement(link);
});

it("should navigate to the login page", () => {
  const { container, getByTestId } = renderWithRouter(<App />);

  fireEvent.click(getByTestId("login-link-1"));

  expect(container.firstChild).toHaveTextContent("Email");
});

it("should submit after 5s", () => {
  const { container, getByTestId } = renderWithRouter(<App />);
  fireEvent.click(getByTestId("login-link-1"));
  console.log(getByTestId("login-button"));
});
