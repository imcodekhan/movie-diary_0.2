import React from "react";
import styles from "./SearchWrapper.module.css";
const SearchWrapper = ({ handleChange, handleSearchButton, movieSearched }) => {
  return (
    <div>
      <div
        className={styles.search}
        style={{
          marginLeft: "35%",
          marginTop: 10,
          marginBottom: 10,
          width: "30%",
        }}
      >
        <input
          type="text"
          className={styles.searchTerm}
          onChange={handleChange}
          value={movieSearched}
        />
        <button
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
