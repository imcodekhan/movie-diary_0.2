import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    
  });
});
