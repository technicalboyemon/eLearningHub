import React, { useEffect, useState } from "react";
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
  return (
    <div>
      <div className="row">
        {myCourse.map((i) => (
          <div className="col-md-4 my-2">
            <div className="courseCard m-1 rounded">
              <img src={i?.thumbnail} alt="Thumbnail" />
              <div className="p-3">
                <span className="py-2 d-inline-block fs-5">{i.name}</span>
                <div className="d-flex justify-content-between align-items-center py-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <img
                      className="rounded-pill"
                      style={{ width: "40px", height: "40px" }}
                      src={i?.thumbnail}
                      alt=""
                    />
                    <span className="ps-1">{i?.instructor}</span>
                  </div>
                  <span className="text-secondary">Developer</span>
                </div>
              </div>
              <div className="w-100 text-white text-center text-uppercase fw-bold pointer d-flex">
                <span className="w-50 primaryBgColor p-3 ">Watch Course</span>
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
