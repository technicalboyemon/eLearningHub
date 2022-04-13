import React from "react";
import { Link } from "react-router-dom";
import HeroIMG1 from "./../../Images/hero-img-01.jpg";

const LearningSteps = () => {
  return (
    <div className="container">
      <div className="py-5">
        <div className="row py-5">
          <div className="col-md-6">
            <h1 className="fw-bolder">
              Eduguard Simple <br />
              Learning Steps
            </h1>
            <div className="d-flex py-3">
              <div className="LearningDots">
                <span className="fw-bold">01.</span>
              </div>
              <div className="w-75">
                <span className="fs-5">Make Your Own Place.</span> <br />
                <span className="fs-6 text-secondary">
                  Fusce dictum, velit eu placerat consectetur, ante nisl auctor
                  magna, sit amet fringilla urna risus.
                </span>
              </div>
            </div>
            <div className="d-flex py-3">
              <div className="LearningDots">
                <span className="fw-bold">02.</span>
              </div>
              <div className="w-75">
                <span className="fs-5">Find Best Course With Better Filtter.</span> <br />
                <span className="fs-6 text-secondary">
                  Fusce dictum, velit eu placerat consectetur, ante nisl auctor
                  magna, sit amet fringilla urna risus.
                </span>
              </div>
            </div>
            <div className="d-flex py-3">
              <div className="LearningDots">
                <span className="fw-bold">03.</span>
              </div>
              <div className="w-75">
                <span className="fs-5">And Become a Master in Your Field.</span> <br />
                <span className="fs-6 text-secondary">
                  Fusce dictum, velit eu placerat consectetur, ante nisl auctor
                  magna, sit amet fringilla urna risus.
                </span>
              </div>
            </div>
            
            <Link
              to="/courseList"
              className="primaryBgColor d-inline-block px-4 py-3 my-2 text-white fw-bolder rounded text-uppercase"
            >
              Start Learning
            </Link>
          </div>
          <div className="col-md-6">
            <img className="w-100" src={HeroIMG1} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSteps;
