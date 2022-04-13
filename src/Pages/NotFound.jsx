import React from "react";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <div className="d-flex align-items-center justify-content-center h-100 my-5 py-5">
        <span className="h1">Not Found</span>
      </div>
      <Footer/>
    </div>
  );
};

export default NotFound;
