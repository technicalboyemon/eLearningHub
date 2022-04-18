import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";

const Account = () => {
  const { user, setPassword, error, UpdatePass } = useAuth();
  const [updateUser, setUpdateUser] = useState({});
  const [accountInfo, setAccountInfo] = useState({});

  const getPassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };

  const handleInput = (e) => {
    let input = { [e.target.name]: e.target.value };
    setAccountInfo({ ...accountInfo, ...input });
  };

  useEffect(() => {
    const url = `http://localhost:5000/users/account?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateUser(data));
  }, [user.email]);

  const UpdateUserInfo = (e) => {
    fetch(`http://localhost:5000/users/account/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": " application/json",
      },
      body: JSON.stringify(accountInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Click2");
        if (data.modifiedCount > 0) {
          alert("Updated User");
        }
      });
  };

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
                  onBlur={(e) => handleInput(e)}
                  defaultValue={updateUser[0]?.name}
                  name="name"
                  type="text"
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
                  disabled
                  defaultValue={user.email}
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
                 defaultValue={updateUser[0]?.profession}
                  onBlur={(e) => handleInput(e)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Developer"
                />
              </div>
              <div className="my-4">
                <label
                  for="exampleInputEmail1"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>About Yourself</span>
                </label>
                <textarea
                  onBlur={(e) => handleInput(e)}
                  rows="3"
                  name="about"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Type Here"
                  defaultValue={updateUser[0]?.about}
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
                      onBlur={(e) => handleInput(e)}
                      name="phone"
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="+880 1921412932"
                      defaultValue={updateUser[0]?.phone}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="my-4">
                    <label
                      htmlFor="national"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>Nationality</span>
                    </label>
                    <input
                      onBlur={(e) => handleInput(e)}
                      type="text"
                      name="national"
                      className="form-control"
                      id="national"
                      placeholder="Bangladesh"
                      defaultValue={updateUser[0]?.national}
                    />
                  </div>
                </div>
              </div>
              <div className="py-3 text-end">
                <div
                  onClick={UpdateUserInfo}
                  to="/dashboard"
                  className="primaryBgColor px-4 py-3 text-white fw-bold rounded text-uppercase d-inline-block"
                >
                  Save Changes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center bg-white rounded p-4 mb-3">
            <img
              className="rounded-circle w-100"
              src="https://eduguard-html.netlify.app/dist/images/user/user-img-01.jpg"
              alt="Profile"
            />
            <button type="button" class="btn btn-outline-primary my-3">
              Change Image
            </button>
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
                  <span>New Password</span>
                </label>
                <input
                  onBlur={getPassword}
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Type Here"
                />
              </div>
            </div>
            <div className="py-3 text-end">
              <div
                onClick={UpdatePass}
                to="/dashboard"
                className="primaryBgColor px-4 py-3 text-white fw-bold rounded text-uppercase d-inline-block"
              >
                Update Password
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
