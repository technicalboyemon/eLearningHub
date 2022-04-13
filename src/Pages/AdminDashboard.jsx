import React from "react";
import { Link, Outlet } from "react-router-dom";
import LOGO from "./../Images/logo.png";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsPersonLinesFill, BsFillBookmarkStarFill, BsFillPersonXFill, BsFillInfoCircleFill, BsChatDotsFill, BsPersonPlusFill, BsPlusCircleFill,BsPlayCircle } from "react-icons/bs";
const AdminDashboard = () => {
  return (
    <div>
      <div className="row g-0">
        <div className="col-md-3 shadow">
          <aside className="bg-white">
            <div className="dProfile">
              <div className="p-5">
                <Link to="/">
                  <img  className="w-75" src={LOGO} alt="Logo" />
                </Link>
              </div>
            </div>
            <nav>
              <div className="py-5 px-4">
                <Link className="align-items-center d-flex NavText py-2 my-1" to="/adminDashboard/">
                  <BsFillGrid1X2Fill />
                  <span className="NavText"> Dashboard</span>
                </Link>
                <Link className="align-items-center d-flex NavText py-2 my-1" to="/adminDashboard/addCourse">
                <BsPlusCircleFill/>
                  <span className="NavText"> Add Course</span>
                </Link>
                <Link className="align-items-center d-flex NavText py-2 my-1" to="/adminDashboard/addStudent">
                <BsPersonPlusFill/>
                  <span className="NavText"> Add Student</span>
                </Link>
                <Link className="align-items-center d-flex NavText py-2 my-1" to="/adminDashboard/addInstructor">
                <BsPersonPlusFill/>
                  <span className="NavText"> Add Instructor</span>
                </Link>
                <Link className="align-items-center d-flex NavText py-2 my-1" to="/adminDashboard/totalCourse">
                  <BsPersonLinesFill />
                  <span className="NavText"> Total Course</span>
                </Link>
                <Link className="align-items-center d-flex NavText py-2 my-1" to="/adminDashboard/totalStudent">
                  <BsPersonLinesFill />
                  <span className="NavText"> Total Student</span>
                </Link>
                <Link className="align-items-center d-flex NavText py-2 my-1" to="/adminDashboard/totalInstructor">
                 <BsPersonLinesFill/>
                  <span className="NavText"> Total Instructor</span>
                </Link>
                <Link className="align-items-center d-flex NavText py-2 my-1" to="/adminDashboard/account">
                <BsFillInfoCircleFill/>
                  <span className="NavText"> Setting</span>
                </Link>
                <Link className="align-items-center d-flex NavText py-2 my-1" to="/">
                <BsFillPersonXFill/>
                  <span className="NavText"> Log Out</span>
                </Link>
              </div>
            </nav>
          </aside>
        </div>
        <div className="col-md-9 dashboardBg">
          <div className="py-5 px-5">
           <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
