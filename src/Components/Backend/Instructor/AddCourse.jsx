import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const AddCourse = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [preLoading, setPreLoading] = useState(false);
  const [coursePrice, setCoursePrice] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseOverview, setCourseOverview] = useState("");
  const [addTitle, setAddTitle] = useState("");
  const [addFileData, setAddFileData] = useState("");
  const [addAllFiles, setAddAllFiles] = useState([]);
  const [coursePreview, setCoursePreview] = useState("");
  const [category, setCategory] = useState([]);
  const [courseCategory, setCourseCategory] = useState("");
  const [instructorProfile, setInstructorProfile] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://cryptic-temple-44121.herokuapp.com/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    const url = `https://cryptic-temple-44121.herokuapp.com/users/account?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInstructorProfile(data[0]));
  }, []);

  const addFile = async () => {
    setLoading(true);
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
    if (file.url) {
      const courseDetails = {
        addTitle,
        addFileDataLink: file.url,
        // addLinkData,
        type: "file",
        duration: Math.floor(file.duration),
      };
      setAddAllFiles([...addAllFiles, courseDetails]);
      setLoading(false);
    }
  };

  const courseUpload = {
    name: courseName,
    overview: courseOverview,
    price: coursePrice,
    id: Math.floor(Math.random() * 100 + 1),
    files: addAllFiles,
    email: user?.email,
    category: courseCategory,
    instructorName: instructorProfile?.name,
    instructorPic: user?.photoURL,
  };

  const courseSubmit = async () => {
    setPreLoading(true);
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
    if (file.asset_id) {
      fetch("https://cryptic-temple-44121.herokuapp.com/courses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...courseUpload, preview: file.url }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setPreLoading(false);
            Swal.fire({
              position: "center-center",
              icon: "success",
              title: "Course Added Successfully",
              showConfirmButton: false,
              timer: 2500,
            });
            navigate("/");
          }
        });
    }
  };

  return (
    <div>
      <div className="text-end">
        {preLoading ? (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="">
            <div
              onClick={courseSubmit}
              className="primaryBgColor d-inline-block px-4 py-3 text-white fw-bolder rounded text-uppercase"
            >
              Add Course
            </div>
          </div>
        )}
      </div>
      <div className="bg-white p-4 my-4 rounded">
        <div className="row align-items-center mb-4">
          <div className="col-md-2">Name</div>
          <div className="col-md-10">
            <input
              onChange={(e) => setCourseName(e.target.value)}
              name="name"
              type="text"
              className="border-0 px-2 rounded border-dark w-100 py-2 bg-light"
              placeholder="Type Here"
            />
          </div>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-md-2">Price</div>
          <div className="col-md-10">
            <input
              onChange={(e) => setCoursePrice(e.target.value)}
              name="price"
              type="text"
              className="border-0 px-2 rounded border-dark w-100 py-2 bg-light"
              placeholder="Type Here"
            />
          </div>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-md-2">Category</div>
          <div className="col-md-10">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(event) => setCourseCategory(event.target.value)}
            >
              <option selected value="Others">
                Select Category
              </option>
              {category.map((i, index) => (
                <option key={index} value={i.category}>
                  {i.category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-md-2">Preview</div>
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
          <div className="col-md-2">Overview</div>
          <div className="col-md-10">
            <textarea
              onChange={(e) => setCourseOverview(e.target.value)}
              name="overview"
              rows="3"
              type="text"
              className="border-0 px-2 rounded border-dark w-100 py-2 bg-light"
              placeholder="Type Here"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2">Curriculum</div>
          <div className="col-md-6">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
                  File Upload
                </div>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row align-items-center my-4 ">
                  <div className="col-md-3 text-black-50 fw-bold">Title</div>
                  <div className="col-md-9">
                    <input
                      onChange={(e) => setAddTitle(e.target.value)}
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
                      Upload
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
                      {/* <input
                        onBlur={(e) => setAddLinkData(e.target.value)}
                        className="form-control mb-3"
                        type="text"
                        id="formFile"
                        placeholder="Paste Link"
                      /> */}
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
            </div>
          </div>
          <div className="col-md-4">
            <div>Course Contents</div>
            {loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border  m-5" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              addAllFiles.map((i) => (
                <div className="row py-2 my-2">
                  <div className="col-md-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-play-circle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                  </div>
                  <div className="col-md-11">
                    <div className="text-black-50">{i?.addTitle}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
