import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Frontend/Footer";
import NavBar from "../../Frontend/NavBar";
import Comment from "../Comment/Comment";
import ReactPlayer from "react-player";

const WatchCourse = () => {
  const [courseWatch, setCourseWatch] = useState([]);
  const { id } = useParams();
  const [playList, setPlayList] = useState({});
  const [playListTitle, setPlayListTitle] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourseWatch(data));
  }, []);
  console.log(playList);
  return (
    <>
      <NavBar />
      <div className="secondaryBgColor">
        <div className="container py-4">
          <div className="my-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="rounded-circle bg-white d-inline-block p-3">
                <Link to="/dashboard/enrolledCourse" className="text-black">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 19.5L8.5 12.5L15.5 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
              {/* <div className="">
                <Link
                  to="/dashboard/myCourse"
                  className="primaryBgColor d-inline-block px-4 py-3 text-white fw-bolder rounded text-uppercase"
                >
                  Next Lesson
                </Link>
              </div> */}
            </div>
            <div className="row my-5">
              <div className="col-md-8">
                <div className="courseVide  rounded  bg-white">
                  {/* <img
                    className="rounded w-100"
                    src="https://eduguard-html.netlify.app/dist/images/courses/thumb.jpg"
                    alt=""
                  /> */}
                  <div className="player-wrapper">
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      url={playList}
                      playing
                      controls
                    />
                  </div>

                  {/* <div className="h3 p-4">{courseWatch?.name}</div> */}
                  <div className="h5 fw-bold px-4 py-3">{playListTitle}</div>
                </div>
                <div>
                  <Comment
                    blog_id={courseWatch?._id}
                    blog_user_id={courseWatch?.user}
                  />
                </div>
              </div>
              <div className="col-md-4 bg-white p-4 rounded h-100">
                <div className="h5">Course Contents</div>
                <hr />
                {courseWatch?.files?.map((file, index) => (
                  <div key={index} className="row align-items-center py-2 my-2">
                    <div className="col-md-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-play-circle"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                      </svg>
                    </div>
                    <div className="col-md-9 pointer">
                      <div
                        className="text-black"
                        onClick={() => {
                          setPlayList(file.addFileDataLink);
                          setPlayListTitle(file.addTitle)
                        }}
                      >
                        {file?.addTitle}
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="text-black">
                        {Math.floor(file.duration / 60) +
                          ":" +
                          (file.duration % 60 ? file.duration % 60 : "00")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WatchCourse;
