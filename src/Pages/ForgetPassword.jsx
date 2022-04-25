import React, { useState } from "react";
import AuthBanner from "../Components/Frontend/AuthBanner";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";
import useAuth from "../Hooks/useAuth";

const ForgetPassword = () => {
  const { error, ForgetPassword, setForgetEmail } = useAuth();
  const getForgetEmail = (e) => {
    setForgetEmail(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="my-5">
        <div className="container">
          <div className="row py-3 align-items-center">
            <div className="col-md-6">
              <div className="loginFrom">
                <h1 className="fw-bolder">Forget Password</h1>
                <p className="text-danger">{error}</p>
                <div className="my-5 w-75">
                  <div className="my-4 input-group-lg">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>Email</span>
                    </label>
                    <input
                      onBlur={getForgetEmail}
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="py-3">
                    <div
                      onClick={ForgetPassword}
                      to="/dashboard"
                      className="primaryBgColor d-block px-4 py-3 text-white fw-bolder rounded text-uppercase text-center text-uppercase"
                    >
                      Forget Password
                    </div>
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

export default ForgetPassword;
