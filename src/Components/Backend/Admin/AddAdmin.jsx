import React, { useState } from "react";
import useAuth from "./../../../Hooks/useAuth";

const AddAdmin = () => {
  const { AuthEmailSend, error } = useAuth();
  const [loginData, setLoginData] = useState({});

  const handleLog = (e) => {
    setLoginData(e.target.value);
  };

  const loginSubmit = () => {
    AuthEmailSend(loginData);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: loginData, isAdmin: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added Data");
          setLoginData("");
        }
      });
  };

  return (
    <div className="bg-white rounded">
      <div className="row align-items-center py-4 px-5">
        <div className="col-md-3">
          <label
            htmlFor="addStudent"
            className="form-label d-flex justify-content-between align-items-center"
          >
            <span className="fs-5">Admin Email</span>
          </label>
        </div>
        <div className="col-md-6">
          <div className="my-4">
            <input
              onBlur={handleLog}
              name="email"
              type="email"
              className="form-control"
              id="addStudent"
              aria-describedby="emailHelp"
              placeholder="example@mail.com"
            />
          </div>
        </div>
        <div className="col-md-3">
          <button
            onClick={loginSubmit}
            type="button"
            className="btn btn-dark d-inline-block"
          >
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
