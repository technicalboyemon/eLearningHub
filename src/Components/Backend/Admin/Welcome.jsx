import React, { useEffect, useState } from "react";
import Translate from "./../../Translate";
import useAuth from "./../../../Hooks/useAuth";
const Welcome = () => {
  const [totalInstructor, setTotalInstructor] = useState([]);
  const [totalStudent, setTotalStudent] = useState([]);
  const [totalCourse, setTotalCourse] = useState([]);
  const { trans } = useAuth();
  useEffect(() => {
    fetch("https://cryptic-temple-44121.herokuapp.com/users/instructor")
      .then((res) => res.json())
      .then((data) => {
        setTotalInstructor(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://cryptic-temple-44121.herokuapp.com/users/student")
      .then((res) => res.json())
      .then((data) => {
        setTotalStudent(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://cryptic-temple-44121.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => {
        setTotalCourse(data);
      });
  }, []);

  return (
    <div>
      <div className="h1 fw-bolder">
        <Translate text="Dashboard" type={trans} />
      </div>
      <hr />
      <div className="row py-4">
        <div className="col-md-4">
          <div className="dBox bg-white p-4 shadow rounded">
            <div className="d-flex">
              <div className="contactIcon contactIcon1">
                <svg
                  width="32"
                  height="28"
                  viewBox="0 0 32 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2H10.4C11.8852 2 13.3096 2.5619 14.3598 3.5621C15.41 4.56229 16 5.91885 16 7.33333V26C16 24.9391 15.5575 23.9217 14.7699 23.1716C13.9822 22.4214 12.9139 22 11.8 22H2V2Z"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M30 2H21.6C20.1148 2 18.6904 2.5619 17.6402 3.5621C16.59 4.56229 16 5.91885 16 7.33333V26C16 24.9391 16.4425 23.9217 17.2302 23.1716C18.0178 22.4214 19.0861 22 20.2 22H30V2Z"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <span className="text-black-50">
                  <Translate text="Total Courses" type={trans} />
                </span>
                <div className="h3 fw-bold">{totalCourse.length}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dBox bg-white p-4 shadow rounded">
            <div className="d-flex">
              <div className="contactIcon contactIcon2">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3855 12.224C21.8743 12.224 23.8915 10.2067 23.8915 7.71794C23.8915 5.23054 21.8743 3.21191 19.3855 3.21191"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21.4575 17.1211C22.201 17.1717 22.939 17.2783 23.6675 17.4395C24.6775 17.6404 25.8938 18.0546 26.3257 18.9607C26.6018 19.5415 26.6018 20.218 26.3257 20.7989C25.8952 21.705 24.6775 22.1191 23.6675 22.3269"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5994 18.0913C15.6425 18.0913 19.9504 18.8553 19.9504 21.9071C19.9504 24.9604 15.6699 25.7503 10.5994 25.7503C5.55624 25.7503 1.24976 24.9877 1.24976 21.9345C1.24976 18.8813 5.52891 18.0913 10.5994 18.0913Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5993 13.7349C7.27274 13.7349 4.60767 11.0684 4.60767 7.74188C4.60767 4.41669 7.27274 1.75024 10.5993 1.75024C13.9259 1.75024 16.5923 4.41669 16.5923 7.74188C16.5923 11.0684 13.9259 13.7349 10.5993 13.7349Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <span className="text-black-50">
                  <Translate text="Active Student" type={trans} />
                </span>
                <div className="h3 fw-bold">{totalStudent.length}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dBox bg-white p-4 shadow rounded">
            <div className="d-flex">
              <div className="contactIcon contactIcon3">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3855 12.224C21.8743 12.224 23.8915 10.2067 23.8915 7.71794C23.8915 5.23054 21.8743 3.21191 19.3855 3.21191"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21.4575 17.1211C22.201 17.1717 22.939 17.2783 23.6675 17.4395C24.6775 17.6404 25.8938 18.0546 26.3257 18.9607C26.6018 19.5415 26.6018 20.218 26.3257 20.7989C25.8952 21.705 24.6775 22.1191 23.6675 22.3269"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5994 18.0913C15.6425 18.0913 19.9504 18.8553 19.9504 21.9071C19.9504 24.9604 15.6699 25.7503 10.5994 25.7503C5.55624 25.7503 1.24976 24.9877 1.24976 21.9345C1.24976 18.8813 5.52891 18.0913 10.5994 18.0913Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5993 13.7349C7.27274 13.7349 4.60767 11.0684 4.60767 7.74188C4.60767 4.41669 7.27274 1.75024 10.5993 1.75024C13.9259 1.75024 16.5923 4.41669 16.5923 7.74188C16.5923 11.0684 13.9259 13.7349 10.5993 13.7349Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <span className="text-black-50">
                  <Translate text="Active Instructor" type={trans} />
                </span>
                <div className="h3 fw-bold">{totalInstructor.length}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dBox"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
