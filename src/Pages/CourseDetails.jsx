import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import NavBar from "../Components/Frontend/NavBar";
import Footer from "../Components/Frontend/Footer";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

const CourseDetails = () => {
  const { addItem } = useCart();

  const [CourseDetails, setCourseDetails] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourseDetails(data));
  }, []);

  let Navigate = useNavigate();
  const courseBuy = () => {
    addItem(CourseDetails)
    Navigate("/cart");
  };
  return (
    <div>
      <NavBar />
      <div className="courseBreadcrumb">
        <div className="container pt-5 pb-3  text-secondary">
          <span> Home &gt; Course </span>
          <div className="row d-flex justify-content-between py-4">
            <div className="col-md-8">
              <div className="courseTitle">
                <span className="fs-2 text-black fw-bold">
                  {CourseDetails.name}
                </span>
                <div className="d-flex align-items-center">
                  <div className="py-1">
                    <img
                      src="https://eduguard-html.netlify.app/dist/images/courses/profile.png"
                      alt="Course Profile"
                    />
                  </div>
                  <div className="px-2">
                    <span>Created By</span> <br />
                    <span className="fw-bold">{CourseDetails.user}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-black">
              <div className="courseInfo py-2">
                <div className="row">
                  <div className="col-md-6">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9C1 9 4 3 9.25 3C14.5 3 17.5 9 17.5 9C17.5 9 14.5 15 9.25 15C4 15 1 9 1 9Z"
                        stroke="#1089FF"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.25 11.25C10.4926 11.25 11.5 10.2426 11.5 9C11.5 7.75736 10.4926 6.75 9.25 6.75C8.00736 6.75 7 7.75736 7 9C7 10.2426 8.00736 11.25 9.25 11.25Z"
                        stroke="#1089FF"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span> 1999 Enrolled</span>
                  </div>
                  <div className="col-md-6">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 2.25H6C6.79565 2.25 7.55871 2.56607 8.12132 3.12868C8.68393 3.69129 9 4.45435 9 5.25V15.75C9 15.1533 8.76295 14.581 8.34099 14.159C7.91903 13.7371 7.34674 13.5 6.75 13.5H1.5V2.25Z"
                        stroke="#00AF91"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M16.5 2.25H12C11.2044 2.25 10.4413 2.56607 9.87868 3.12868C9.31607 3.69129 9 4.45435 9 5.25V15.75C9 15.1533 9.23705 14.581 9.65901 14.159C10.081 13.7371 10.6533 13.5 11.25 13.5H16.5V2.25Z"
                        stroke="#00AF91"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span> 35 Lesson</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.94438 2.34287L11.7457 5.96656C11.8359 6.14934 12.0102 6.2769 12.2124 6.30645L16.2452 6.88901C16.4085 6.91079 16.5555 6.99635 16.6559 7.12701C16.8441 7.37201 16.8153 7.71891 16.5898 7.92969L13.6668 10.7561C13.5183 10.8961 13.4522 11.1015 13.4911 11.3014L14.1911 15.2898C14.2401 15.6204 14.0145 15.93 13.684 15.9836C13.5471 16.0046 13.4071 15.9829 13.2826 15.9214L9.69082 14.0384C9.51037 13.9404 9.29415 13.9404 9.1137 14.0384L5.49546 15.9315C5.1929 16.0855 4.82267 15.9712 4.65778 15.6748C4.59478 15.5551 4.57301 15.419 4.59478 15.286L5.29479 11.2975C5.32979 11.0984 5.26368 10.8938 5.11901 10.753L2.18055 7.92735C1.94099 7.68935 1.93943 7.30201 2.17821 7.06246C2.17899 7.06168 2.17977 7.06012 2.18055 7.05935C2.27932 6.9699 2.40066 6.91001 2.5321 6.88668L6.56569 6.30412C6.76713 6.27223 6.94058 6.14623 7.03236 5.96345L8.83215 2.34287C8.90448 2.19587 9.03281 2.08309 9.18837 2.03176C9.3447 1.97965 9.51582 1.99209 9.66282 2.06598C9.78337 2.12587 9.88215 2.22309 9.94438 2.34287Z"
                        stroke="#FF7A1A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span> 5.0 Start</span>
                  </div>
                  <div className="col-md-6">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                        stroke="#FFC91B"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9 4.5V9L12 10.5"
                        stroke="#FFC91B"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span> 3 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondaryBgColor">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-8">
              <div className="courseDetails">
                <div className="coursePreview">
                  <img
                    className="rounded w-100"
                    src={CourseDetails?.preview?.secure_url}
                    alt="Preview Photo"
                  />
                </div>

                <div className="my-5">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <div
                        className="NavText ps-0 active h5"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Overview
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div
                        className="NavText h5"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Curriculum
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div
                        className="NavText h5"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Instructor
                      </div>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active text-black bg-white p-4 rounded"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <p>Description </p>
                      {CourseDetails.overview}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="row bg-white p-4 rounded">
                        <div className="col-md-12">
                          {/* <div>Course Contents</div> */}
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
                              <div className="text-black">
                                1. Introduction to Adobe XD
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="text-black">12.29</div>
                            </div>
                          </div>
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div className="bg-white p-4 rounded">
                        <div className="row text-black justify-content-center align-items-center">
                          <div className="col-md-3">
                            <img
                              src="https://eduguard-html.netlify.app/dist/images/courses/courseinstructor.png"
                              alt=""
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="h4">Emon Ahmed</div>
                            <div className="fs-5">Developer</div>
                          </div>
                        </div>

                        <div className="row text-black py-4">
                          <div className="h4">
                            Adobe Certified Instructor & Adobe Certified Expert.
                          </div>
                          <div className="fs-6 ">
                            Joe has been preaching and practicing the gospel of
                            User Experience (UX) to Fortune 100, 500 and
                            Government organizations for nearly three decades.
                            That work includes commercial industry leaders like
                            Google Ventures, Kroll/Duff + Phelps, Broadridge,
                            Conde Nast, Johns Hopkins, Mettler-Toledo, PHH
                            Arval, SC Johnson and Wolters Kluwer, as well as
                            government agencies like the National Science
                            Foundation, National Institutes of Health and the
                            Dept. of Homeland Security.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="purchaseArea shadow">
                <div className="bg-white rounded p-4 border-bottom">
                  <div className="fs-3 ">${CourseDetails.price}</div>
                  <div
                    onClick={courseBuy}
                    to="/courseList"
                    className="primaryBgColor d-block px-4 py-3 my-3 text-white fw-bolder rounded text-uppercase text-center pointer"
                  >
                    BUY NOW
                  </div>
                  <hr />
                  <p className="text-black h5">This course includes:</p>
                  <div className="py-1">
                    <img
                      src="https://eduguard-html.netlify.app/dist/images/icon/dollar.png"
                      alt=""
                    />
                    <span className="ms-1">Full Lifetime Access</span>
                  </div>
                  <div className="py-1">
                    <img
                      src="https://eduguard-html.netlify.app/dist/images/icon/clock-2.png"
                      alt=""
                    />
                    <span className="ms-1">30 Days Money Back Guarantee</span>
                  </div>
                  <div className="py-1">
                    <img
                      src="https://eduguard-html.netlify.app/dist/images/icon/paper-plus.png"
                      alt=""
                    />
                    <span className="ms-1">Free Exercises File</span>
                  </div>
                  <div className="py-1">
                    <img
                      src="https://eduguard-html.netlify.app/dist/images/icon/airplay.png"
                      alt=""
                    />
                    <span className="ms-1">
                      Access on Mobile , Tablet and TV
                    </span>
                  </div>
                  <div className="py-1">
                    <img
                      src="https://eduguard-html.netlify.app/dist/images/icon/clipboard.png"
                      alt=""
                    />
                    <span className="ms-1">Certificate of Completion</span>
                  </div>
                  <hr />
                  <p className="h5">Share This Course</p>
                  <span className="text-black">
                    <span className="fs-4 me-2">
                      <BsFacebook />
                    </span>
                    <span className="fs-4 mx-2">
                      <BsInstagram />
                    </span>
                    <span className="fs-4 mx-2">
                      <BsTwitter />
                    </span>
                    <span className="fs-4 mx-2">
                      <BsYoutube />
                    </span>
                    <span className="fs-4 mx-2">
                      <BsLinkedin />
                    </span>
                  </span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
