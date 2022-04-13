import React from "react";
import { Link } from "react-router-dom";
import BannerPerson from "./../../Images/banner-person.png";
const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="row justify-content-center align-items-center py-2">
          <div className="col-md-6 py-5">
            <h1 className="display-3 fw-bolder">
              Learn With Expert Anytime Anywhere.
            </h1>
            <p className="fs-5 py-2 text-secondary">
              Our mision is to help people to find the best course online and
              learn with expert anytime, anywhere.
            </p>
            <Link to="/courseList" className="primaryBgColor d-inline-block px-4 py-3 text-white fw-bolder rounded">
              Start Your Learning
            </Link>
          </div>
          <div className="col-md-6">
            <img className="bannerImg w-100" src={BannerPerson} alt="Banner Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
