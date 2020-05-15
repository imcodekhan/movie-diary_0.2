import React from "react";

const Tab = ({
  handleTabClick,
  movie,
  index,
  handleDeleteButton,
  showNote,
  setShowNote,
}) => {
  return (
    <React.Fragment>
      {/* <div
        style={{
          
          color: "white",
          padding: 0,
          
        }}
      >
        <div
          
          key={movie.id}
          style={{ minHeight: 84 }}
        >
          
        </div>

        
        <div className="secondary-content">
          
        </div>
      </div> */}
      <li
        style={{
          display: "flex",
          minHeight: 84,
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            flex: 4,
            display: "flex",
            backgroundColor: movie.watched ? "white" : "grey",
            height: 83,
          }}
          onClick={() => handleTabClick(movie, index)}
        >
          <img
            style={{ height: 50, width: 50, marginLeft: 30 }}
            src={movie.image}
            alt={movie.title}
            className="circle"
          />

          <h1 style={{ flex: 8 }}>{movie.title}</h1>
        </div>
        <div
          style={{
            flex: 1,
            height: 84,
            padding: "30px 10px",
          }}
        >
          <i
            className="fa fa-trash fa-2x"
            aria-hidden="true"
            onClick={handleDeleteButton}
          ></i>
        </div>
        <div
          style={{
            flex: 1,
            padding: "30px 10px",
            height: 84,
          }}
        >
          <i
            className="fa fa-book fa-2x"
            aria-hidden="true"
            onClick={() => {
              showNote === movie.id
                ? setShowNote(false)
                : setShowNote(movie.id);
            }}
          ></i>
        </div>
        <div
          style={{
            display: showNote === movie.id ? "block" : "none",
            padding: 20,
          }}
        >
          {movie.note}
        </div>
      </li>
      <br></br>
    </React.Fragment>
  );
};

export default Tab;
