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
    >
      <i className="fa fa-video-camera fa-3x" aria-hidden="true"></i>

      <h2 style={{ flex: 5, margin: 20 }}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          MovieDairy
        </Link>
      </h2>

      <h3 style={{ marginRight: 10, color: "white" }}>
        {loginStatus ? (
          <div onClick={handleLogout}>Logout</div>
        ) : (
          <Link style={{ textDecoration: "none", color: "white" }} to="/login">
            Login
          </Link>
        )}

        <Link style={{ textDecoration: "none", color: "white" }} to="/diary">
          Diary
        </Link>
      </h3>
    </div>
  );
};

export default Navigation;
