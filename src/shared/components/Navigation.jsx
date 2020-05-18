import React from "react";

import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "#FF6D00",
      }}
      className="navbar"
    >
      <i className="fa fa-video-camera fa-3x" aria-hidden="true"></i>

      <h2 style={{ flex: 5, margin: 20 }}>
        <Link style={{ textDecoration: "none" }} to="/">
          Movie-dairy
        </Link>
      </h2>

      <h3 style={{ marginRight: 10 }}>
        <Link style={{ textDecoration: "none" }} to="/diary">
          Diary
        </Link>
      </h3>
    </div>
  );
};

export default Navigation;
