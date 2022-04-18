import React, { useEffect, useState } from "react";

const TotalStudent = () => {
  const [totalUsers, setTotalUser] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setTotalUser(data));
  }, []);

  const DeleteUser = (id) => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted");
          const remainingUser = totalUsers.filter((user) => user._id !== id);
          setTotalUser(remainingUser);
        }
      });
  };
  return (
    <div>
      <div>
        <div className="h1 fw-bolder">Total Student</div>
        <hr />
        <div className="bg-white rounded p-4 my-5">
          <table className="table text-center">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                {/* <th scope="col">Course</th> */}
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {totalUsers.map((user) => (
                <tr>
                  {/* <th>1</th> */}
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  {/* <td>Course Name</td> */}
                  <td>
                    <div className="NavText">
                      <button
                        onClick={()=> DeleteUser(user._id)}
                        type="button"
                        className="btn btn-dark"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {/* <tr>
                <th>1</th>
                <td>Emon Ahmed</td>
                <td>Development</td>
                <td>Web Course</td>
                <td>
                  <div className="NavText">
                    <button type="button" className="btn btn-dark">
                      Remove
                    </button>
                  </div>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TotalStudent;
