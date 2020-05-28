import React, { useContext } from "react";

import { Link } from "react-router-dom";
import userContext from "../../sign/userContext";

const Navigation = ({ handleLogout }) => {
  const loginStatus = useContext(userContext);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "black",
        color: "white",
        borderRadius: "5px 5px 5px 5px",
      }}
      className="navbar"
      data-testid="navbar"
    >
      <i className="fa fa-video-camera fa-3x" aria-hidden="true"></i>

      <h2 style={{ flex: 5, margin: 20 }}>
        <Link
          data-testid="movie_diary-link"
          style={{ textDecoration: "none", color: "white" }}
          to="/"
        >
          MovieDairy
        </Link>
      </h2>

      <h3 data-testid="login-status" style={{ margin: 10, color: "white" }}>
        {loginStatus ? (
          <div data-testid="logout-flag" onClick={handleLogout}>
            Logout
          </div>
        ) : (
          <Link
            data-testid="login-link-1"
            style={{ textDecoration: "none", color: "white", margin: 10 }}
            to="/login"
          >
            Login
          </Link>
        )}

        {loginStatus ? (
          <Link
            data-testid="diary-link"
            style={{ textDecoration: "none", color: "white", margin: 10 }}
            to="/diary"
          >
            Diary
          </Link>
        ) : (
          <Link
            data-testid="login-link-2"
            style={{ textDecoration: "none", color: "white", margin: 10 }}
            to="/login"
          >
            Diary
          </Link>
        )}
      </h3>
    </div>
  );
};

export default Navigation;
