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
              title={movie.fullTitle}
              image={movie.image}
              handleHeartButton={handleHeartButton}
              favMovies={favMovies}
              desc={movie.descritption}
              rating={movie.imDbRating}
              crew={movie.crew}
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
