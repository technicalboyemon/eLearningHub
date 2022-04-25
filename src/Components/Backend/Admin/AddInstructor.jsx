import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const AddInstructor = () => {
  const { AuthEmailSend, error } = useAuth();
  const [loginData, setLoginData] = useState({});
  const [category, setCategory] = useState([]);
  const [preLoading, setPreLoading] = useState(false);
  const [instructorFile, setInstructorFile] = useState("");
  const [courseCategory, setCourseCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const handleLog = (e) => {
    setLoginData(e.target.value);
  };

  const loginSubmit = async () => {
    setPreLoading(true);
    AuthEmailSend(loginData);
    const formData = new FormData();
    formData.append("file", instructorFile);
    formData.append("upload_preset", "elearning");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/elearning-hub/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const file = await res.json();
    const InstructorInfoUp = {
      preview: file.url,
      email: loginData,
      isInstructor: true,
      name: "",
      about: "",
      phone: "",
      national: "",
      profession: "",
      category: courseCategory,
    };

    if (file.asset_id) {
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(InstructorInfoUp),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Added Data");
            setLoginData("");
          }
        });
    }
  };

  return (
    <div className="bg-white rounded">
      <div className="row align-items-center py-4 px-5">
        <div className="col-md-2">
          <label
            htmlFor="addStudent"
            className="form-label d-flex justify-content-between align-items-center"
          >
            <span className="fs-5">Instructor</span>
          </label>
        </div>
        <div className="col-md-3">
          <div className="my-4">
            <input
              onBlur={handleLog}
              name="email"
              type="email"
              className="form-control"
              id="addStudent"
              placeholder="Instructor Email"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="my-4">
            <input
              onChange={(e) => setInstructorFile(e.target.files[0])}
              name="InstructorFile"
              type="file"
              className="form-control"
              id="addStudent"
              aria-describedby="emailHelp"
              placeholder="example@mail.com"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="my-4">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(event) => setCourseCategory(event.target.value)}
            >
              <option selected>Select Category</option>
              {category.map((i, index) => (
                <option key={index} value={i.category}>
                  {i.category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <button
            onClick={loginSubmit}
            type="button"
            className="btn btn-dark d-inline-block"
          >
            Add Instructor
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddInstructor;
