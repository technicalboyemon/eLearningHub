import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Axios from "axios";
import { async } from "@firebase/util";

const AddCourse = () => {
  const { user } = useAuth();
  const [accountInfo, setAccountInfo] = useState({});
  const [coursePrice, setCoursePrice] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseOverview, setCourseOverview] = useState("");
  const [addTitle, setAddTitle] = useState("");
  const [addFileData, setAddFileData] = useState("");
  const [addFileDataLink, setAddFileDataLink] = useState("");
  const [addLinkData, setAddLinkData] = useState("");
  const [addAllFiles, setAddAllFiles] = useState([]);
  const [coursePreview, setCoursePreview] = useState("");
  const [coursePreviewData, setCoursePreviewData] = useState("");

  // const handleInput = (e) => {
  //   let input = { [e.target.name]: e.target.value };
  //   setAccountInfo({...accountInfo, ...input});
  // };

  const coursePreviewLink = async () => {
    const formData = new FormData();
    formData.append("file", coursePreview);
    formData.append("upload_preset", "elearning");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/elearning-hub/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const file = await res.json();
    setCoursePreviewData(file);
  };

  const addFile = async () => {
    const formData = new FormData();
    formData.append("file", addFileData);
    formData.append("upload_preset", "elearning");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/elearning-hub/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const file = await res.json();
    setAddFileDataLink(file);
    const courseDetails = {
      addTitle,
      addFileDataLink,
      addLinkData,
      type: "file",
    };
    setAddAllFiles([...addAllFiles, courseDetails]);
  };

  const courseUpload = {
    name: courseName,
    overview: courseOverview,
    price: coursePrice,
    id: Math.floor(Math.random() * 100 + 1),
    files: addAllFiles,
    email: user?.email,
    preview: coursePreviewData,
  };

  const courseSubmit = () => {
    fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(courseUpload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Data Uploading ");
          coursePreviewLink();
        }
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-end rounded-circle bg-white d-inline-block p-3">
  
          {/* <Link to="/" className="text-black">
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
          </Link> */}
        </div>
        <div className="">
          <div
            onClick={courseSubmit}
            className="primaryBgColor d-inline-block px-4 py-3 text-white fw-bolder rounded text-uppercase"
          >
            Add Course
          </div>
        </div>
      </div>
      <div className="bg-white p-4 my-4 rounded">
        <div className="row align-items-center mb-4">
          <div className="col-md-2">Course Name</div>
          <div className="col-md-10">
            <input
              onBlur={(e) => setCourseName(e.target.value)}
              name="name"
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
              onBlur={(e) => setCoursePrice(e.target.value)}
              name="price"
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
              onChange={(e) => setCoursePreview(e.target.files[0])}
              name="preview"
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
              onBlur={(e) => setCourseOverview(e.target.value)}
              name="overview"
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
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <div
                  className="px-4 py-2 rounded bg-black text-white me-1 pointer"
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
              <li className="nav-item" role="presentation">
                <div
                  className="px-4 py-2 rounded bg-black text-white mx-1 pointer"
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
              {/* <li className="nav-item" role="presentation">
                <div
                  className="px-4 py-2 rounded bg-black text-white mx-1 pointer"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Form
                </div>
              </li> */}
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
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
                      htmlFor="formFile"
                      className="form-label text-black-50 fw-bold"
                    >
                      Video File
                    </label>
                  </div>
                  <div className="col-md-9">
                    <div className="mb-3">
                      <input
                        className="form-control mb-3"
                        type="file"
                        id="formFile"
                      />
                      <input
                        className="form-control mb-3"
                        type="text"
                        id="formFile"
                        placeholder="Paste Link"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button type="button" className="btn btn-dark d-inline-block">
                    Add
                  </button>
                </div>
              </div>
              <div
                className="tab-pane fade"
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
                      onBlur={(e) => setAddTitle(e.target.value)}
                      type="text"
                      className="border-0 px-2 rounded border-dark w-100 py-2 bg-light"
                      placeholder="Type Here"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label
                      htmlFor="formFile"
                      className="form-label text-black-50 fw-bold"
                    >
                      File Upload
                    </label>
                  </div>
                  <div className="col-md-9">
                    <div className="mb-3">
                      <input
                        onChange={(e) => setAddFileData(e.target.files[0])}
                        name="file"
                        className="form-control mb-3"
                        type="file"
                        id="formFile"
                      />
                      <input
                        onBlur={(e) => setAddLinkData(e.target.value)}
                        className="form-control mb-3"
                        type="text"
                        id="formFile"
                        placeholder="Paste Link"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={addFile}
                    type="button"
                    className="btn btn-dark d-inline-block"
                  >
                    Add
                  </button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="row align-items-center my-4 ">
                  <div className="col-md-3 text-black-50 fw-bold">Question</div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="border-0 px-2 rounded border-dark w-100 py-2 bg-light"
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="col-md-3 text-black-50 fw-bold">
                    <button
                      type="button"
                      className="btn btn-dark d-inline-block"
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-3">
                    <label
                      htmlFor="formFile"
                      className="form-label text-black-50 fw-bold"
                    >
                      File Upload
                    </label>
                  </div>
                  <div className="col-md-9">
                    <div className="mb-3">
                      <input
                        className="form-control mb-3"
                        type="file"
                        id="formFile"
                      />
                      <input
                        className="form-control mb-3"
                        type="text"
                        id="formFile"
                        placeholder="Paste Link"
                      />
                    </div>
                  </div>
                </div> */}
                <div>
                  <button type="button" className="btn btn-dark d-inline-block">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>Course Contents</div>
            {addAllFiles.map((i) => (
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
                    className="feather feather-play-circle"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
                <div className="col-md-9">
                  <div className="text-black-50">{i.addTitle}</div>
                </div>
                {/* <div className="col-md-2">
                  <div className="text-secondary">12.29</div>
                </div> */}
              </div>
            ))}
            {/* <div className="row py-2 my-2">
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
                <div className="text-black-50">2. Introduction to Adobe XD</div>
              </div>
              <div className="col-md-2">
                <div className="text-secondary">12.29</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
