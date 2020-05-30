import React from "react";

const Tab = ({
  handleTabClick,
  movie,
  index,
  handleDeleteButton,
  showNote,
  setShowNote,
  handleNoteSave,
  showModal,
  setShowModal,
  newNote,
  setNewNote,
}) => {
  return (
    <React.Fragment>
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
            height: 84,
          }}
          onClick={() => handleTabClick(index)}
          data-testid="background-flag"
        >
          <img
            style={{ height: 50, width: 50, margin: "15px 15px" }}
            src={movie.image}
            alt={movie.title}
            className="circle"
          />

          <h5 style={{ flex: 8, margin: "15px 15px" }}>{movie.title}</h5>
        </div>
        <div
          className="divs"
          style={{
            flex: 1,
            height: 84,
            padding: "30px 15px",
          }}
        >
          <i
            title="delete"
            className="fa fa-trash fa-2x "
            aria-hidden="true"
            onClick={handleDeleteButton}
          ></i>
        </div>
        <div
          className="divs"
          style={{
            flex: 1,
            padding: "30px 15px",
            height: 84,
          }}
        >
          <i
            title="notes"
            className="fa fa-book fa-2x "
            aria-hidden="true"
            onClick={() => {
              showNote === movie.id
                ? setShowNote(false)
                : setShowNote(movie.id);
            }}
          ></i>
        </div>
      </li>
      <div
        style={{
          display: showNote === movie.id ? "flex" : "none",
          padding: 20,
        }}
      >
        <div style={{ flex: 5 }}>{movie.note}</div>
        <button
          className="btn btn-info"
          onClick={() => setShowModal(true)}
          style={{ flex: 1 }}
        >
          edit
        </button>

        {showModal && (
          <div
            data-testid="modal-flag"
            style={{
              position: "absolute",
              backgroundColor: "bisque",
              top: "20%",
              left: "25%",
              zIndex: 20,
              height: 500,
              width: 1000,
              color: "white",
              padding: "8%",
            }}
          >
            <label style={{ fontSize: 28 }}>Happy Notes</label>
            <textarea
              className="form-control"
              type="text"
              rows="5"
              onChange={(e) => setNewNote(e.target.value)}
              placeholder={movie.note}
            />
            <button
              className="btn btn-warning"
              onClick={() => {
                setShowModal(false);
                setNewNote(movie.note);
              }}
              style={{ float: "right", margin: 10 }}
            >
              close
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                handleNoteSave(index, newNote);
                setShowModal(false);
              }}
              style={{ float: "right", margin: 10 }}
            >
              save
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Tab;
