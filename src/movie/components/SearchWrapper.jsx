import React from "react";
import styles from "./SearchWrapper.module.css";
import Tags from "./Tags";

const SearchWrapper = ({
  handleChange,
  handleSearchButton,
  movieSearched,
  handleTagClick,
}) => {
  return (
    <div
      style={{
        position: "sticky",
        top: 80,
        zIndex: 10,
        backgroundColor: "#FFD180",
        display: "flex",
      }}
    >
      <Tags handleTagClick={handleTagClick} />
      <div
        className={styles.search}
        style={{
          margin: "4% 3% 1% 2%",
        }}
      >
        <input
          type="text"
          className={styles.searchTerm}
          onChange={handleChange}
          value={movieSearched}
        />
        <button
          data-testid="search-button"
          type="submit"
          className={styles.searchButton}
          onClick={handleSearchButton}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchWrapper;
