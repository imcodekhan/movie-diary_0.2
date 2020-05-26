import React, { useState, useContext } from "react";
import Tab from "./components/Tab";
import { Link } from "react-router-dom";
import userContext from "../sign/userContext";

const Diary = ({
  favMovies,
  handleTabClick,
  handleDeleteButton,
  handleNoteSave,
}) => {
  const login = useContext(userContext);
  console.log("Diary rendered");
  console.log(login);
  const [showNote, setShowNote] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newNote, setNewNote] = useState("");
  return (
    <div className="container">
      {login ? <h3>welocme to {login.diaryname}</h3> : ""}
      <ul
        className="z-depth-3"
        style={{ margin: "10% 20%", display: "flex", flexDirection: "column" }}
      >
        {favMovies.length === 0 ? (
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={{ right: 10 }}>
              <h6
                style={{ minHeight: 100, marginLeft: "30%", marginTop: "10%" }}
              >
                Add Favourate Movies
              </h6>
              <div>
                <div
                  style={{
                    fontSize: 50,
                    fontWeight: 800,
                    height: 60,
                    width: 60,
                    border: "2px solid purple",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "tomato",

                    float: "right",
                    margin: 10,
                  }}
                  onClick={() => console.log("added")}
                >
                  <h3 style={{ marginTop: 10 }}>+</h3>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          favMovies.map((movie, index) => (
            <Tab
              key={movie.id}
              handleTabClick={handleTabClick}
              handleDeleteButton={handleDeleteButton}
              movie={movie}
              index={index}
              showNote={showNote}
              setShowNote={setShowNote}
              handleNoteSave={handleNoteSave}
              showModal={showModal}
              setShowModal={setShowModal}
              newNote={newNote}
              setNewNote={setNewNote}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Diary;
