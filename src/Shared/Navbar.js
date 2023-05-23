import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          FMS
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="login" onClick={props.logout}>
              {props.isLogin ? "Log Out" : "Log In"}
            </NavLink>
            {!props.isLogin && (
              <NavLink className="nav-link" to="signup">
                Sign Up
              </NavLink>
            )}
            {props.isLogin && (
              <>
                <NavLink className="nav-link" to="file-upload">
                  File Upload
                </NavLink>
                <NavLink className="nav-link" to="file-list">
                  File List
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
