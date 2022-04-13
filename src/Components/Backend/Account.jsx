import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <div className="bg-white rounded p-4 mb-3">
            <h6 className="py-2 fs-5">Your Information</h6>
            <div className="w-100">
              <div className="my-4">
                <label
                  for="exampleInputEmail1"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>Full Name</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Type Here"
                />
              </div>
              <div className="my-4">
                <label
                  for="exampleInputEmail1"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="example@mail.com"
                />
              </div>
              <div className="my-4">
                <label
                  for="exampleInputEmail1"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>What Do You Do</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Developer"
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="my-4">
                    <label
                      for="exampleInputEmail1"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="+880 1921412932"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="my-4">
                    <label
                      for="exampleInputEmail1"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>Nationality</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Bangladesh"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center bg-white rounded p-4 mb-3">
            <img className="rounded-circle w-100" src="https://eduguard-html.netlify.app/dist/images/user/user-img-01.jpg" alt="Profile" />
            <button type="button" class="btn btn-outline-primary my-3">Change Image</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <div className="bg-white rounded p-4 mb-3">
            <h6 className=" fs-5">Change Password</h6>
            <div className="w-100">
              <div className="my-4">
                <label
                  for="exampleInputEmail1"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>Current Password </span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Type Here"
                />
              </div>
              <div className="my-4">
                <label
                  for="exampleInputEmail1"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>New Password</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Type Here"
                />
              </div>
              <div className="my-4">
                <label
                  for="exampleInputEmail1"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>Confirm New Password </span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Type Here"
                />
              </div>
            </div>
            <div className="py-3 text-end">
              <Link
                to="/dashboard"
                className="primaryBgColor px-4 py-3 text-white fw-bold rounded text-uppercase d-inline-block"
              >
                Save Changes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
