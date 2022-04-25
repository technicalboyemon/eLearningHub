import React from "react";

const LearningSteps = () => {
  return (
    <div className="container">
      <div className="py-5">
        <div className="row align-items-center py-5">
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
                  Get inspired. Learn new skills. Make discoveries.
                </span>
              </div>
            </div>
            <div className="d-flex py-3">
              <div className="LearningDots">
                <span className="fw-bold">02.</span>
              </div>
              <div className="w-75">
                <span className="fs-5">
                  Find Best Course With Better Filtter.
                </span>{" "}
                <br />
                <span className="fs-6 text-secondary">
                  Share expertise. Earn money. Give back.
                </span>
              </div>
            </div>
            <div className="d-flex py-3">
              <div className="LearningDots">
                <span className="fw-bold">03.</span>
              </div>
              <div className="w-75">
                <span className="fs-5">And Become a Master in Your Field.</span>{" "}
                <br />
                <span className="fs-6 text-secondary">
                  Be curious. Make an impact. Live a full life.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src={
                "https://seobrien.com/wp-content/uploads/2019/10/marketing-education-entrepreneurship.jpg"
              }
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSteps;
