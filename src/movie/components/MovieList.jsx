import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

const MovieList = ({
  defaultMovies,
  searchedMovies,
  handleHeartButton,
  favMovies,
}) => {
  return (
    <div className={styles.flexContainer}>
      {searchedMovies.length === 0
        ? defaultMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.image}
              handleHeartButton={handleHeartButton}
              favMovies={favMovies}
            />
          ))
        : searchedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.image}
              handleHeartButton={handleHeartButton}
              favMovies={favMovies}
            />
          ))}
    </div>
  );
};

export default MovieList;
