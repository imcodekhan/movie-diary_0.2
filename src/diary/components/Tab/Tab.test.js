import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Tab from "./Tab";

afterEach(cleanup);

const movie = {
  id: "1",
  title: "mockingJay",
  image: "https://mockingJay.com",
  watched: false,
  note: "happy netflixs",
};
const props = {
  movie: {
    ...movie,
  },
  handleTabClick: jest.fn(),
  index: 1,
  handleDeleteButton: jest.fn(),
  showNote: false,
  setShowNote: jest.fn(),
  handleNoteSave: jest.fn(),
  showModal: false,
  setShowModal: jest.fn(),
  newNote: "",
  setNewNote: jest.fn(),
};
const props2 = {
  ...props,
  movie: { ...movie, watched: true },
};

const props3 = {
  ...props,
  showNote: "1",
};

const props4 = {
  ...props,
  newNote: "hello",
  showModal: true,
};
// console.log(props3);

it("should match the snapshot", () => {
  const { asFragment, getByText, getByAltText, getByTitle } = render(
    <Tab {...props} />
  );
  expect(asFragment).toMatchSnapshot();
  expect(getByText(props.movie.title)).toBeInTheDocument();
  expect(getByAltText(props.movie.title)).toBeInTheDocument();
  expect(getByTitle("delete")).toBeInTheDocument();
  expect(getByTitle("notes")).toBeInTheDocument();
});

describe("should have background color", () => {
  it(" grey", () => {
    const { getByTestId } = render(<Tab {...props} />);
    expect(getByTestId("background-flag")).toHaveStyle(
      'backgroundColor:"grey"'
    );
  });
  it("white", () => {
    const { getByTestId } = render(<Tab {...props2} />);
    expect(getByTestId("background-flag")).toHaveStyle(
      'backgroundColor:"white"'
    );
  });
});

it("should call handleTabClick with index", () => {
  props.handleTabClick.mockClear();
  const { getByTestId } = render(<Tab {...props} />);
  fireEvent.click(getByTestId("background-flag"));
  expect(props.handleTabClick).toHaveBeenCalledWith(props.index);
});

it("should call setShowModal to true when edit button clicked", () => {
  props.setShowModal.mockClear();
  const { getByText } = render(<Tab {...props} />);
  fireEvent.click(getByText("edit"));
  expect(props.setShowModal).toHaveBeenCalledWith(true);
});

describe("should call setShowNote index", () => {
  it("index", () => {
    props.setShowNote.mockClear();
    const { getByTitle } = render(<Tab {...props} />);
    fireEvent.click(getByTitle("notes"));
    expect(props.setShowNote).toHaveBeenCalledWith("1");
  });
  it("false", () => {
    props.setShowNote.mockClear();
    const { getByTitle } = render(<Tab {...props3} />);
    fireEvent.click(getByTitle("notes"));
    expect(props3.setShowNote).toHaveBeenCalledWith(false);
  });
});

it("should show modal", () => {
  const { getByTestId } = render(<Tab {...props4} />);
  expect(getByTestId("modal-flag")).toBeInTheDocument();
});

describe("on click of close button", () => {
  it("should call setShowModal with false", () => {
    props.setShowModal.mockClear();
    const { getByText } = render(<Tab {...props4} />);
    fireEvent.click(getByText("close"));
    expect(props4.setShowModal).toHaveBeenCalledWith(false);
  });
  it("should call setNewNote with note", () => {
    props.setNewNote.mockClear();
    const { getByText } = render(<Tab {...props4} />);
    fireEvent.click(getByText("close"));
    expect(props4.setNewNote).toHaveBeenCalledWith(props4.movie.note);
  });
});

describe("on click of save button", () => {
  it("should call setShowModal with false", () => {
    props.setShowModal.mockClear();
    const { getByText } = render(<Tab {...props4} />);
    fireEvent.click(getByText("save"));
    expect(props4.setShowModal).toHaveBeenCalledWith(false);
  });
  it("should call handleNoteSave with index,newNote", () => {
    props.handleNoteSave.mockClear();
    const { getByText } = render(<Tab {...props4} />);
    fireEvent.click(getByText("save"));
    expect(props.handleNoteSave).toHaveBeenCalledWith(
      props4.index,
      props4.newNote
    );
  });
});

it("should change value on change", () => {
  props4.setNewNote.mockClear();
  const event = {
    target: {
      value: "hello world",
    },
  };
  const { getByPlaceholderText } = render(<Tab {...props4} />);
  fireEvent.input(getByPlaceholderText(props4.movie.note), event);
  expect(props4.setNewNote).toHaveBeenCalledWith(event.target.value);
});
