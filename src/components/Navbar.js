import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.aboutHome}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <ul className="navbar-nav mx-2">
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light" ? "dark" : "light"} Mode</label>
                    </div>                   
                  </li>
                  <li className="dropdown-item">
                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light" ? "dark" : "light"} Mode</label>
                    </div>                   
                  </li>
                  <li className="dropdown-item">
                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light" ? "dark" : "light"} Mode</label>
                    </div>                   
                  </li>
                </ul>
              </li>
              </ul>
              <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light" ? "dark" : "light"} Mode</label>
              </div>
            </div>
          </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = { title: "Set Title Here", aboutHome: "About Home" };

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutHome: PropTypes.string.isRequired,
};
