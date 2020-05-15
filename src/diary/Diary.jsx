import React, { useState } from "react";
import Tab from "./components/Tab";

const Diary = ({
  favMovies,
  handleTabClick,
  handleDeleteButton,
  handleNoteButton,
}) => {
  console.log("Diary rendered");
  const [showNote, setShowNote] = useState(false);
  return (
    <div className="container">
      <ul
        className="z-depth-3"
        style={{ margin: "10% 20%", display: "flex", flexDirection: "column" }}
      >
        {favMovies.map((movie, index) => (
          <Tab
            key={movie.id}
            handleTabClick={handleTabClick}
            handleDeleteButton={handleDeleteButton}
            handleNoteButton={handleNoteButton}
            movie={movie}
            index={index}
            showNote={showNote}
            setShowNote={setShowNote}
          />
        ))}
      </ul>
    </div>
  );
};

export default Diary;
