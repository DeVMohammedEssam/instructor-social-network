import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchInput from "./SearchField";
const Navbar = withRouter(
  ({
    signed = false,
    login = true,
    courses = false,
    showLis = false,
    userName = "Andrew Ng",
    logout,
    history
  }) => {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              className="navbar__logo"
              src="/images/navbar/ISNlogo.svg"
              alt=""
              width="40"
              height="40"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars navbar-toggler__icon" />
          </button>
          <div
            className="collapse navbar-collapse flex-column flex-lg-row justify-content-lg-end"
            id="navbarNav"
          >
            {courses ? <SearchInput /> : ""}

            {signed ? (
              <div className="navbar__signed-options-container">
                <button className="btn btn--notification">
                  <i className="fa fa-bell fa-lg" />
                  <span className="badge badge-bill badge-danger">5</span>
                </button>

                <button className="btn btn--notification">
                  <i className="fa fa-envelope fa-lg" />
                  <span className="badge badge-bill badge-danger">3</span>
                </button>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <span className="navbar__link-seperator" />
                  </li>
                </ul>
                <div className="navbar__profile-pic-container d-flex ">
                  <div className="img--rounded">
                    <img
                      className="profile-pic"
                      src="http://placehold.it/100/100"
                      alt=""
                    />
                  </div>
                  <div className=" navbar__profile-text d-flex justify-contetn-center align-items-start flex-column ">
                    <span style={{ marginBottom: "-14px" }}>{userName}</span>
                    <ul className="navbar-nav">
                      <li className="nav-item my-0 dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Logout
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link
                            className="dropdown-item"
                            to="/dashboard/settings"
                          >
                            settings
                          </Link>
                          <Link className="dropdown-item" to="/profile/45sd">
                            profile
                          </Link>
                          <Link className="dropdown-item" to="/channel/45">
                            channel
                          </Link>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Logout
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="navbar__btns-container d-flex w-100 justify-content-lg-end justify-content-center">
                <Link
                  to="/login"
                  className={`${login ? "navbar__btn-link--active" : ""}`}
                >
                  <button className={`navbar__btn btn }`}>Login</button>
                </Link>

                <Link
                  to="/signup"
                  className={`${login ? "" : "navbar__btn-link--active"}`}
                >
                  <button className={`navbar__btn btn `}>Sign up</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
);

export default Navbar;
