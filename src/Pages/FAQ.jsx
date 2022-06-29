import React from "react";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";
import useAuth from "../Hooks/useAuth";
import Translate from "../Components/Translate";
const FAQ = () => {
  const { trans } = useAuth();
  return (
    <div>
      <NavBar />
      <div className="courseBreadcrumb">
        <div className="container py-5 text-secondary">
          <span>
            <Translate text="Home &gt; FAQ" type={trans} />
          </span>
        </div>
      </div>
      <div className="faq py-5">
        <div className="container py-5 w-75">
          <div
            className="accordion accordion-flush"
            id="accordionPanelsStayOpenExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <Translate text="Who is this course for?" type={trans} />
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  {" "}
                  <Translate
                    text="Those who want to be a web developer. For those who learn web
                  development from scratch and then want to work for a software
                  company as a web developer."
                    type={trans}
                  />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  {" "}
                  <Translate
                    text="   What prior experience do I need to have before starting this
                course?"
                    type={trans}
                  />
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  Since we are teaching from scratch. So you don't have to know
                  that much in advance. But if you have time, you can do these
                  three things. <br /> 1. You just have to be more
                  discriminating with the help you render toward other people.{" "}
                  <br /> 2. Joining the course will not make you an auto web
                  developer. You have to have the mentality to work hard, to
                  stick. <br /> 3. If you are stuck somewhere, you have to have
                  the mentality to seek help and the desire to stick.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <Translate text=" What's in the course?" type={trans} />
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  You can understand that only by looking at the course
                  curriculum. But in short, this course has everything you need
                  to be a serious web developer right now. In short, there is
                  HTML, CSS, bootstrap, JavaScript, Git, ES6, REST API, server,
                  JSON. At the same time, there is a system to create a complete
                  website with the React, advanced React framework that is the
                  most employed at present. In addition there are many more
                  things including node, database (mongodb), debug, problem
                  solving, interview questions. And throughout the course you
                  will be shown 11 websites. There will be 11 more websites as
                  your homework. There is no way out without being a good junior
                  web developer if you can finish this whole thing somehow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <Translate text="  How to get course videos? " type={trans} />
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  Course videos will be pre-recorded. You opened an account and
                  enrolled in this course. The videos will be given one module
                  per day from the beginning of the course. Each module usually
                  contains 10 to 12 videos. You must watch and finish these
                  videos within the day they are released. So you have to have a
                  dedicated time every day for the course. And in that time, if
                  you want, you can watch the video lying down, standing,
                  leaning, shaking your legs, dancing, or hiding under the bed.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <Translate text=" What things do I need?" type={trans} />
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  First of all it takes dedicated time. Must 7-8 hours daily. If
                  possible, 8-10 hours (if you can't afford it. If you don't
                  want to work hard, enrolling in the course will be of no use.)
                  Internet of 10 Mbps. It is better to have broadband so that
                  the video of the course can be seen well. If you want to be a
                  professional web developer, you have to go through a minimum
                  of 4 months of serious hard work.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
