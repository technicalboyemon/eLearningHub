import React from "react";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";
import InstructorData from "./../Data/Instructor.json";
const Instructor = () => {
  return (
    <div>
      <NavBar />
      <div className="courseBreadcrumb">
        <div className="container py-5 text-secondary">
          <span> Home &gt; Instructor </span>
        </div>
      </div>
      <div className="container pt-4 pb-5 mt-2 mb-5">
        <h1 className="text-center fw-bolder my-5">Meet Our Best Instructor</h1>
        <div>
          <div className="row">
            {InstructorData.map((i) => (
              <div className="col-md-3 py-3">
                <div>
                  <img
                    className="w-100 h-100 position-relative"
                    src={i.image}
                    alt="Instructor"
                  />
                  <div className="instructorInfo p-3 border border-top-0">
                    <span className="fw-bold fs-5">{i.title}</span> <br />
                    <span className="d-inline-block text-secondary">
                      {i.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Instructor;
