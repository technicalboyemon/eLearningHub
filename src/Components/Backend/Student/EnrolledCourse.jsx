import React from "react";
import { Link } from "react-router-dom";
import CourseData from "./../../../Data/Course.json";
const EnrolledCourse = () => {
  return (
    <div>
      <div className="row">
        {CourseData.map((i) => (
          <div className="col-md-4 my-2">
            <div className="courseCard m-1 rounded">
              <img src={i.thumbnail} alt="Thumbnail" />
              <div className="p-3">
                <span className="py-2 d-inline-block fs-5">{i.title}</span>
                <div className="d-flex justify-content-between align-items-center py-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <img
                      className="rounded-pill"
                      style={{ width: "40px", height: "40px" }}
                      src={i.thumbnail}
                      alt=""
                    />
                    <span className="ps-1">{i.instructor}</span>
                  </div>
                  <span className="text-secondary">Developer</span>
                </div>
              </div>
              <Link to="/watch">
              <div className="p-3 primaryBgColor text-white text-center text-uppercase fw-bold pointer">
                <span>Watch Course</span>
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourse;
