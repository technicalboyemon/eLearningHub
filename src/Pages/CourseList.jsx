import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";
import CourseData from "./../Data/Course.json";

const CourseList = () => {
  return (
    <div>
      <NavBar/>
      <div className="courseBreadcrumb">
        <div className="container py-5 text-secondary">
          <span> Home &gt; Course </span>
        </div>
        <div className="courseList py-3">
          <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-inline-block">
                <select class="form-select form-select-lg" aria-label="Default select example">
                  <option selected>Most View</option>
                  <option value="1">Best Course</option>
                  <option value="2">Price</option>
                </select>
              </div>
              <div>{CourseData.length} results found.</div>
            </div>

            <div className="row py-5">
              {CourseData.map((i) => (
                <div className="col-md-4 my-2">
                  <div className="courseCard m-1 rounded">
                    <img src={i.thumbnail} alt="Thumbnail" />
                    <div className="p-3 border-bottom">
                      <Link to="/courseDetails">
                      <span className="py-2 d-inline-block fs-5">
                        {i.title}
                      </span></Link>
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
            <nav aria-label="Page navigation example">
              <ul class="pagination pagination-lg justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link">Prev</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CourseList;
