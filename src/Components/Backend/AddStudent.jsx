import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const AddStudent = () => {
  const { AuthEmailSend, error, user, logout, googleLog } = useAuth();
  const [loginData, setLoginData] = useState({});
  const handleLog = (e) => {
    setLoginData(e.target.value);
  };
  const loginSubmit = () => {
    AuthEmailSend(loginData);
  };
  console.log(user);

  return (
    <div className="bg-white rounded">
      <div className="row align-items-center py-4 px-5">
        <div className="col-md-3">
          <label
            for="addStudent"
            className="form-label d-flex justify-content-between align-items-center"
          >
            <span className="fs-5">Student Email </span>
          </label>
          <p className="text-danger">{error}</p>
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
            class="btn btn-dark d-inline-block"
          >
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
