import React from "react";
import AboutImg from "./../Images/aboutUs.jpg";
import MeetInstructor from "./../Components/Frontend/MeetInstructor";
import NavBar from "../Components/Frontend/NavBar";
import Footer from "../Components/Frontend/Footer";
const About = () => {
  return (
    <>
    <NavBar />
      <div className="courseBreadcrumb">
        <div className="container py-5 text-secondary">
          <span> Home &gt; About </span>
        </div>
      </div>
      <div className="container my-5">
        <div className="row py-5 align-items-center">
          <div className="col-md-6">
            <div className="about-img">
              <img className="rounded-3 w-100" src={AboutImg} alt="AboutUs" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutInfo">
              <h1 className="fw-bolder">A Great Place To Grow.</h1>
              <p>
                Vestibulum efficitur accumsan sapien ut lacinia. Sed euismod
                ullamcorper rhoncus. Phasellus interdum rutrum nisi ut lacinia.
                Nulla et sapien at turpis viverra. Cras odio ex, posuere id est
                et, viverra condimentum felis
              </p>
              <p>
                congue quis non odio. Aliquam sem ligula, commodo quis ipsum
                mattis, lacinia cursus magna.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-6">
            <div className="aboutBoxBlack bg-dark rounded p-5 border border-3 border-dark">
              <h2 className="text-white">Who We Are</h2>
              <p className="text-secondary">
                Suspendisse potenti. Pellentesque augue ligula, dictum at
                pretium eu, fermentum sit amet risus. Maecenas congue feugiat
                libero, sed euismod urna congue eleifend. Maecenas et gravida
                felis.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutBoxBlack border border-3 border-light rounded p-5">
              <h2>Who We Are</h2>
              <p className="text-secondary">
                Suspendisse potenti. Pellentesque augue ligula, dictum at
                pretium eu, fermentum sit amet risus. Maecenas congue feugiat
                libero, sed euismod urna congue eleifend. Maecenas et gravida
                felis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <MeetInstructor />
      <Footer/>
    </>
  );
};

export default About;
