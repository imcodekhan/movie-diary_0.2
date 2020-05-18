import React from "react";

const Tags = ({ handleTagClick }) => {
  return (
    <div style={{ display: "flex", padding: 10 }}>
      <button
        style={{ padding: 10, borderRadius: 25, fontWeight: 900 }}
        onClick={handleTagClick}
        title="Top250Movies"
        className="btn btn-default"
      >
        top 250 movies
      </button>
      <button
        style={{
          padding: 10,
          marginLeft: 10,
          borderRadius: 25,
          fontWeight: 900,
        }}
        onClick={handleTagClick}
        title="Top250TVs"
        className="btn btn-default"
      >
        top 250 tv shows
      </button>
      <button
        style={{
          padding: 10,
          borderRadius: 25,
          marginRight: 10,
          marginLeft: 10,
          fontWeight: 900,
        }}
        onClick={handleTagClick}
        title="MostPopluarMovies"
        className="btn btn-default"
      >
        Most popular Movies
      </button>
      <button
        style={{ padding: 10, borderRadius: 25, fontWeight: 900 }}
        onClick={handleTagClick}
        title="MostPopularTVs"
        className="btn btn-default"
      >
        Most Popular Tv shows
      </button>
    </div>
  );
};

export default Tags;
