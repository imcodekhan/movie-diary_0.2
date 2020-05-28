import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Login from "./Login";
import { act } from "react-dom/test-utils";

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("should render after 2s", async () => {
  const { container, getByTestId } = renderWithRouter(<Login />);
  //   fireEvent.click(getByTestId("login-button"));
});
