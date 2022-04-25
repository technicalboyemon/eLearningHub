import React from "react";
import AboutImg from "./../Images/contactUs.jpg";
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
                Whether we are eLearning or not, our goal is to help those who
                seriously want to be programming heroes. Making their learning
                process enjoyable and effective. In this endeavor we are
                constantly learning new things, trying.
              </p>
              <p>
                The thing I thought couldn’t be possible a year or two ago, is
                actually happening.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-6">
            <div className="aboutBoxBlack bg-dark rounded p-5 border border-3 border-dark">
              <h2 className="text-white">Who We Are</h2>
              <p className="text-secondary">
                At eLearning, we’ve seen again and again how the seemingly
                simple act of creating can be a force for growth, change, and
                discovery in people’s lives. We want to inspire and multiply the
                kind of creative exploration that furthers expression, learning
                and application.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutBoxBlack border border-3 border-light rounded p-5">
              <h2>What We Are</h2>
              <p className="text-secondary">
                eLearning is an online learning community with thousands of
                classes for creative and curious people, on topics including
                illustration, design, photography, video, freelancing, and more.
                On eLearning, members come together to find inspiration and take
                the next step in their creative journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <MeetInstructor />
      <Footer />
    </>
  );
};

export default About;
