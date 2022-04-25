import React, { useEffect, useState } from "react";
import useAuth from "./../../Hooks/useAuth";
import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();

const Account = () => {
  const { user, setPassword, UpdatePass } = useAuth();
  const [updateUser, setUpdateUser] = useState({});
  // const [accountInfo, setAccountInfo] = useState({});
  const [profilePic, setProfilePic] = useState("");
  const [preLoading, setPreLoading] = useState(false);
  const [name, setName] = useState(updateUser?.name);
  const [profession, setProfession] = useState("");
  const [about, setAbout] = useState("");
  const [phone, setPhone] = useState("");
  const [national, setNational] = useState("");
  console.log(updateUser[0]?.name);

  useEffect(() => {
    setName(updateUser?.name);
  }, [updateUser?.name]);

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  // const handleInput = (e) => {
  //   let input = { [e.target.name]: e.target.value };
  //   setAccountInfo({ ...accountInfo, ...input });
  // };

  const accountInfo = {
    name: name,
    profession,
    about,
    phone,
    national,
  };
  console.log(accountInfo);
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
        if (data.modifiedCount > 0) {
          alert("Updated User");
        }
      });
  };

  const profileImage = async () => {
    setPreLoading(true);
    const formData = new FormData();
    formData.append("file", profilePic);
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
      updateProfile(auth.currentUser, {
        photoURL: file.url,
      })
        .then(() => {
          // Profile updated!
        })
        .catch((error) => {
          console.log(error);
        });
      setPreLoading(false);
    }
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
                  htmlFor="name"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>Full Name</span>
                </label>
                <input
                  onBlur={(e) => setName(e.target.value)}
                  defaultValue={updateUser[0]?.name}
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Type Here"
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="email"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>Email</span>
                </label>
                <input
                  disabled
                  defaultValue={user.email}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="example@mail.com"
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="profession"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>What Do You Do</span>
                </label>
                <input
                  onBlur={(e) => setProfession(e.target.value)}
                  name="profession"
                  type="text"
                  className="form-control"
                  id="profession"
                  placeholder="Developer"
                  defaultValue={updateUser[0]?.profession}
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="about"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>About Yourself</span>
                </label>
                <textarea
                  onBlur={(e) => setAbout(e.target.value)}
                  rows="3"
                  name="about"
                  type="text"
                  className="form-control"
                  id="about"
                  placeholder="Type Here"
                  defaultValue={updateUser[0]?.about}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="my-4">
                    <label
                      htmlFor="number"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>Phone Number</span>
                    </label>
                    <input
                      onBlur={(e) => setPhone(e.target.value)}
                      name="phone"
                      type="text"
                      className="form-control"
                      id="number"
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
                      onBlur={(e) => setNational(e.target.value)}
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
              width="150px"
              height="150px"
              className="profilePic"
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://idronline.org/wp-content/uploads/2021/01/Screen-Shot-2019-02-19-at-1.23.40-PM-300x300-3.jpg"
              }
              alt="Profile"
            />
            <input
              className="py-2"
              style={{ width: "110px" }}
              onChange={(e) => setProfilePic(e.target.files[0])}
              type="file"
              name="photo"
              id="profile"
            />
            {preLoading ? (
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button
                onClick={profileImage}
                type="button"
                className="btn btn-outline-primary my-3"
              >
                Change Image
              </button>
            )}
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
                  htmlFor="password"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>New Password</span>
                </label>
                <input
                  onBlur={getPassword}
                  type="password"
                  className="form-control"
                  id="password"
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
