import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${
        props.mode === "dark" ? "dark" : "info"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/TextForm">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Aboutus">
                About Us
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckChecked"
              />
              <label
                className={`form-check-label ${
                  props.mode === "light" ? "light" : "dark"
                }`}
                style={{ color: props.mode === "dark" ? "white" : "white" }}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light"
                  ? " Enable Dark Mode"
                  : " Enable Light Mode"}
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
