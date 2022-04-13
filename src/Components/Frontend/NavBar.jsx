import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import LOGO from "./../../Images/logo.png";
import useAuth from "./../../Hooks/useAuth.jsx";
const NavBar = () => {
  const { user,logout } = useAuth();
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={LOGO} alt="Logo" />
          </Link>
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
            <ul className="navbar-nav m-auto mb-2 mb-lg-1">
              <li className="nav-item">
                <Link
                  className="NavText nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/courseList" className="NavText nav-link">
                  Course
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/instructor" className="NavText nav-link" href="#">
                  Instructor
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="NavText nav-link">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="NavText nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="NavText nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/cart">
                  <span className="position-relative mx-2">
                    <span className="fs-4">
                      <BsCartPlus />
                    </span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill primaryBgColor">
                      9<span className="visually-hidden">Cart Items</span>
                    </span>
                  </span>
                </Link>
              </li>
              <li className="nav-item mx-1">
                {!user.email ? (
                  <Link
                    className="NavText nav-link"
                    aria-current="page"
                    to="/login"
                  >
                    <button type="button" className="btn btn-dark">
                      LOGIN
                    </button>
                  </Link>
                ) : (
                  <Link to="/dashboard">
                    <img
                      width="45px"
                      className="rounded-circle"
                      src="https://eduguard-html.netlify.app/dist/images/user/user-img-01.jpg"
                      alt=""
                    />
                  </Link>
                )}
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <button type="button" className="btn btn-dark">
                    Register
                  </button>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
