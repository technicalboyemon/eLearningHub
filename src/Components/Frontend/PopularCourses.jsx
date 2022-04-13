import React from "react";
import { Link } from "react-router-dom";
import CourseData from "./../../Data/Course.json";

const PopularCourses = () => {
  console.log(CourseData);
  return (
    <div className="popularCourse py-1">
      <div className="container py-5">
        <h1 className="fw-bolder py-5">Our Popular Courses</h1>
        <div className="row">
          {CourseData.map((i) => (
            <div className="col-md-4 my-2">
              <div className="courseCard m-1 rounded">
                <img src={i.thumbnail} alt="Thumbnail" />
                <div className="p-3 border-bottom">
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
                    <span>${i.price}</span>
                  </div>
                </div>
                <div className="p-3 d-flex justify-content-between align-items-center">
                  <span>{i.rating} Rating</span>
                  <span>{i.curriculum.lesson.length} Lesson</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center py-5">
          <Link
            to="/courseList"
            className="primaryBgColor d-inline-block px-4 py-3 text-white fw-bolder rounded text-uppercase"
          >
            Browse All Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
