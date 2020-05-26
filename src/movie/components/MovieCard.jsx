import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import userContext from "../../sign/userContext";

const MovieCard = ({
  id,
  image,
  title,
  handleHeartButton,
  favMovies,
  crew,
  rating,
  history,
}) => {
  const loginStatus = useContext(userContext);
  // console.log(loginStatus, history);

  let favStatus = favMovies.find((movie) => {
    return movie.id === id;
  });

  return (
    <div className="card h-100">
      <div className="card-image">
        <img src={image} alt={title} height="500" />

        <div
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            loginStatus
              ? handleHeartButton(id, title, image)
              : history.push("/login");
          }}
        >
          {favStatus ? (
            <i className="fa fa-heart" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          )}
        </div>
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{crew}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default withRouter(MovieCard);
