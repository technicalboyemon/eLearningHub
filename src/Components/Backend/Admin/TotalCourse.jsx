import React, { useEffect, useState } from "react";

const TotalCourse = () => {
  const [totalCourse, setTotalCourse] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-temple-44121.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => setTotalCourse(data));
  }, []);

  const DeleteCourse = (id) => {
    const url = `https://cryptic-temple-44121.herokuapp.com/courses/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted");
          const remainingUser = totalCourse.filter((user) => user._id !== id);
          setTotalCourse(remainingUser);
        }
      });
  };
  return (
    <div>
      <div className="h1 fw-bolder">Total Course</div>
      <hr />
      <div className="bg-white rounded p-4 my-5">
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">By</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {totalCourse.map((course,index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.instructorName}</td>
                <td>${course.price}</td>
                <td>
                  <div className="NavText">
                    <button
                      onClick={() => DeleteCourse(course._id)}
                      type="button"
                      className="btn btn-dark"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalCourse;
