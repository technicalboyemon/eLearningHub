import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddCourse = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="rounded-circle bg-white d-inline-block p-3">
          <Link to="/dashboard/addCourse" className="text-black">
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
            Add Course
          </Link>
        </div>
      </div>
      <div className="bg-white p-4 my-4 rounded">
        <div className="row align-items-center mb-4">
          <div className="col-md-2">Course Name</div>
          <div className="col-md-10">
            <input
              type="text"
              className="border-0 px-2 rounded border-dark w-100 py-2 bg-light"
              placeholder="Type Here"
            />
          </div>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-md-2">Course Price</div>
          <div className="col-md-10">
            <input
              type="text"
              className="border-0 px-2 rounded border-dark w-100 py-2 bg-light"
              placeholder="Type Here"
            />
          </div>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-md-2">Course Preview</div>
          <div className="col-md-10">
            <input
              type="file"
              className="border-0 px-2 rounded border-dark w-100 py-2 bg-light"
              placeholder="Type Here"
            />
          </div>
        </div>
        <div className="row align-items-start mb-4">
          <div className="col-md-2">Course Overview</div>
          <div className="col-md-10">
            <textarea
              rows="3"
              type="text"
              className="border-0 px-2 rounded border-dark w-100 py-2 bg-light"
              placeholder="Type Here"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2">Course Curriculum</div>
          <div className="col-md-6">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <div
                  class="px-4 py-2 rounded bg-black text-white me-1 pointer"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Video
                </div>
              </li>
              <li class="nav-item" role="presentation">
                <div
                  class="px-4 py-2 rounded bg-black text-white mx-1 pointer"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  File
                </div>
              </li>
              <li class="nav-item" role="presentation">
                <div
                  class="px-4 py-2 rounded bg-black text-white mx-1 pointer"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Form
                </div>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row align-items-center my-4 ">
                  <div className="col-md-3 text-black-50 fw-bold">
                    Class Title
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="border-0 px-2 rounded border-dark w-100 py-2 bg-light"
                      placeholder="Type Here"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label
                      for="formFile"
                      class="form-label text-black-50 fw-bold"
                    >
                      Video File
                    </label>
                  </div>
                  <div className="col-md-9">
                    <div class="mb-3">
                      <input
                        class="form-control mb-3"
                        type="file"
                        id="formFile"
                      />
                      <input
                        class="form-control mb-3"
                        type="text"
                        id="formFile"
                        placeholder="Paste Link"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button type="button" class="btn btn-dark d-inline-block">
                    Add
                  </button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row align-items-center my-4 ">
                  <div className="col-md-3 text-black-50 fw-bold">
                    File Title
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="border-0 px-2 rounded border-dark w-100 py-2 bg-light"
                      placeholder="Type Here"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label
                      for="formFile"
                      class="form-label text-black-50 fw-bold"
                    >
                      File Upload
                    </label>
                  </div>
                  <div className="col-md-9">
                    <div class="mb-3">
                      <input
                        class="form-control mb-3"
                        type="file"
                        id="formFile"
                      />
                      <input
                        class="form-control mb-3"
                        type="text"
                        id="formFile"
                        placeholder="Paste Link"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button type="button" class="btn btn-dark d-inline-block">
                    Add
                  </button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="row align-items-center my-4 ">
                  <div className="col-md-3 text-black-50 fw-bold">
                    Question
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="border-0 px-2 rounded border-dark w-100 py-2 bg-light"
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="col-md-3 text-black-50 fw-bold">
                  <button type="button" class="btn btn-dark d-inline-block">
                    +
                  </button>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-3">
                    <label
                      for="formFile"
                      class="form-label text-black-50 fw-bold"
                    >
                      File Upload
                    </label>
                  </div>
                  <div className="col-md-9">
                    <div class="mb-3">
                      <input
                        class="form-control mb-3"
                        type="file"
                        id="formFile"
                      />
                      <input
                        class="form-control mb-3"
                        type="text"
                        id="formFile"
                        placeholder="Paste Link"
                      />
                    </div>
                  </div>
                </div> */}
                <div>
                  <button type="button" class="btn btn-dark d-inline-block">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>Course Contents</div>
            <div className="row py-2 my-2">
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
                  class="feather feather-play-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <div className="col-md-9">
                <div className="text-black-50">1. Introduction to Adobe XD</div>
              </div>
              <div className="col-md-2">
                <div className="text-secondary">12.29</div>
              </div>
            </div>
            <div className="row py-2 my-2">
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
                  class="feather feather-file"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <div className="col-md-9">
                <div className="text-black-50">2. Introduction to Adobe XD</div>
              </div>
              <div className="col-md-2">
                <div className="text-secondary">12.29</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
