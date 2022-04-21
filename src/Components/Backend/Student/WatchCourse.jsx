import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Frontend/Footer";
import NavBar from "../../Frontend/NavBar";

const WatchCourse = () => {
  const [courseWatch, setCourseWatch] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourseWatch(data));
  }, []);
  console.log(courseWatch);
  return (
    <>
      <NavBar />
      <div className="secondaryBgColor">
        <div className="container py-4">
          <div className="my-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="rounded-circle bg-white d-inline-block p-3">
                <Link to="/dashboard/enrolledCourse" className="text-black">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 19.5L8.5 12.5L15.5 5.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="">
                <Link
                  to="/dashboard/myCourse"
                  className="primaryBgColor d-inline-block px-4 py-3 text-white fw-bolder rounded text-uppercase"
                >
                  Next Lesson
                </Link>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-8">
                <div className="courseVide rounded bg-white">
                  <img
                    className="rounded w-100"
                    src="https://eduguard-html.netlify.app/dist/images/courses/thumb.jpg"
                    alt=""
                  />
                  <div className="h3 p-4">{courseWatch?.name}</div>
                  <div>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-4 bg-white p-4 rounded h-100">
                <div className="h5">Course Contents</div>
                <hr />
                {courseWatch?.files?.map((file) => (
                  <div className="row align-items-center py-2 my-2">
                    <div className="col-md-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-play-circle"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                      </svg>
                    </div>
                    <div className="col-md-9">
                      <div className="text-black">{file?.addTitle}</div>
                    </div>
                    <div className="col-md-2">
                      <div className="text-black">12.29</div>
                    </div>
                  </div>
                ))}
                {/* <div className="row align-items-center py-2 my-2">
                  <div className="col-md-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                  </div>
                  <div className="col-md-9">
                    <div className="text-black">
                      2. Introduction to Adobe XD
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="text-black">12.29</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WatchCourse;
