import React from "react";

const TotalCourse = () => {
  return (
    <div>
      <div className="h1 fw-bolder">Total Course</div>
      <hr />
      <div className="bg-white rounded p-4 my-5">
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">By</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Development</td>
              <td>Emon Ahmed</td>
              <td>$40</td>
              <td>
                <div className="NavText">
                  <button type="button" className="btn btn-dark">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Design</td>
              <td>Emon Ahmed</td>
              <td>$50</td>
              <td>
                <div className="NavText">
                  <button type="button" className="btn btn-dark">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalCourse;
