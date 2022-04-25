import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const MyCourse = () => {
  const { user } = useAuth();
  const [myCourse, setMyCourse] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/course/account?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCourse(data);
      });
  }, []);
  const DeleteUser = (id) => {
    const url = `http://localhost:5000/courses/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted");
          const remainingUser = myCourse.filter((user) => user._id !== id);
          setMyCourse(remainingUser);
        }
      });
  };
  console.log(myCourse);
  return (
    <div>
      <div className="row">
        {myCourse.map((i, index) => (
          <div key={index} className="col-md-4 my-2">
            <div className="courseCard m-1 rounded">
              <img
                style={{ height: "240px" }}
                className="w-100"
                src={i?.preview}
                alt="Thumbnail"
              />
              <div className="p-3">
                <span className="py-2 d-inline-block fs-5">{i?.name}</span>
              </div>
              <div className="w-100 text-white text-center text-uppercase fw-bold pointer d-flex">
                <Link className="w-50" to={`/watch/${i._id}`}>
                  <div className="p-3 primaryBgColor text-white text-center text-uppercase fw-bold pointer">
                    <span>Watch Course</span>
                  </div>
                </Link>
                <span
                  onClick={() => DeleteUser(i._id)}
                  className="w-50 bg-danger p-3 "
                >
                  Delete Course
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourse;
