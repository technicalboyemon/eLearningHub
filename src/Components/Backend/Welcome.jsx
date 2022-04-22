import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Welcome = () => {
  const {user, logout} = useAuth()
  const [ userInfo, setUserInfo ] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/users/account?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);
  console.log(userInfo);
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="aboutMe bg-white rounded p-4 mb-3">
            <h6 className="py-2 fs-5">About Me</h6>
            <span className="text-secondary">
              {userInfo[0]?.about}
            </span>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="bg-white rounded p-4 mb-3">
            <h6 className="py-2 fs-5">Emon Information</h6>
            <div className="row">
              <div className="col-md-6 text-dark">Name</div>
              <div className="col-md-6 text-secondary">{userInfo[0]?.name}</div>
            </div>
            <div className="row">
              <div className="col-md-6 text-dark">E-mail</div>
              <div className="col-md-6 text-secondary">
               {user.email}
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-6 text-dark">
              {userInfo[0]?.about}
              </div>
              <div className="col-md-6 text-secondary">UI/UX Designer</div>
            </div> */}
            <div className="row">
              <div className="col-md-6 text-dark">Nationality</div>
              <div className="col-md-6 text-secondary">{userInfo[0]?.national}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
