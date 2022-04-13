import React from 'react'

const TotalInstructor = () => {
  return (
    <div>
         <div>
      <div className="h1 fw-bolder">Total Instructor</div>
      <hr />
      <div className="bg-white rounded p-4 my-5">
      <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Emon Ahmed</td>
              <td>Development</td>
              <td>
                <div className="NavText">
                  <button type="button" className="btn btn-dark">
                    Remove
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Emon Ahmed</td>
              <td>Development</td>
              <td>
                <div className="NavText">
                  <button type="button" className="btn btn-dark">
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default TotalInstructor