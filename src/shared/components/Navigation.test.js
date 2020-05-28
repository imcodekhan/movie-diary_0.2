import React from "react";
import { render, cleanup } from "@testing-library/react";
import Navigation from "./Navigation";
import userContext from "../../sign/userContext";
import App from "../../App";

// testing Context
const renderWithContext = (component) => {
  return {
    ...render(<App value={userContext}>{component}</App>),
  };
};

afterEach(cleanup);

it("initial context", () => {
  const { getByTestId } = renderWithContext(<Navigation />);
  expect(getByTestId("login-status").firstChild.nodeName.match("A"));
});
