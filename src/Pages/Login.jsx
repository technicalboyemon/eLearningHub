import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthBanner from "../Components/Frontend/AuthBanner";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const { loginUser, user, error } = useAuth();
  const [loginData, setLoginData] = useState({});

  const handleLog = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const loginSubmit = () => {
    loginUser(loginData.email, loginData.password);
    console.log(loginData.email, loginData.password);
    console.log(user);
  };

  return (
    <>
      <NavBar />
      <div className="my-5">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-6">
              <div className="loginFrom">
                <h1 className="fw-bolder">Login</h1>
                <p className="text-danger">{error}</p>
                <div className="my-5 w-75">
                  <div className="my-4 input-group-lg">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      onChange={handleLog}
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="my-4 input-group-lg">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>Password </span>
                      <span>
                        <Link to="/forget-password">Forget</Link>
                      </span>
                    </label>
                    <input
                      onChange={handleLog}
                      name="password"
                      type="password"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="py-3">
                    <Link
                      onClick={loginSubmit}
                      to="/dashboard"
                      className="primaryBgColor d-block px-4 py-3 text-white fw-bolder rounded text-uppercase text-center text-uppercase"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <AuthBanner />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
