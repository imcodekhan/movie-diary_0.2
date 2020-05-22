import React from "react";

const MovieCard = ({
  id,
  image,
  title,
  handleHeartButton,
  favMovies,
  crew,
  rating,
}) => {
  let favStatus = favMovies.find((movie) => {
    // console.log(movie.id, id);
    return movie.id === id;
  });
  // console.log("Movie Card rendered", favStatus);
  return (
    <div className="card h-100">
      <div className="card-image">
        <img src={image} alt={title} height="500" />

        <div
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => handleHeartButton(id, title, image)}
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

export default MovieCard;
