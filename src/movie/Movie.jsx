import React from "react";
import SearchWrapper from "./components/SearchWrapper";
import MovieList from "./components/MovieList";

const Movie = ({
  defaultMovies,
  searchedMovies,
  favMovies,
  handleSearchButton,
  handleChange,
  movieSearched,
  handleHeartButton,
  handleTagClick,
}) => {
  console.log("Movie rendered");

  return (
    <div>
      <SearchWrapper
        handleChange={handleChange}
        handleSearchButton={handleSearchButton}
        movieSearched={movieSearched}
        handleTagClick={handleTagClick}
      />
      <MovieList
        defaultMovies={defaultMovies}
        searchedMovies={searchedMovies}
        handleHeartButton={handleHeartButton}
        favMovies={favMovies}
      />
    </div>
  );
};

export default Movie;
