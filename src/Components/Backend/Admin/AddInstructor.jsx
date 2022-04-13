import React from 'react'

const AddInstructor = () => {
  return (
    <div className="bg-white rounded">
    <div className="row align-items-center py-4 px-5">
      <div className="col-md-3">
        <label
          for="addStudent"
          className="form-label d-flex justify-content-between align-items-center"
        >
          <span className="fs-5">Instructor Email</span>
        </label>
      </div>
      <div className="col-md-6">
        <div className="my-4">
          <input
            type="email"
            className="form-control"
            id="addStudent"
            aria-describedby="emailHelp"
            placeholder="example@mail.com"
          />
        </div>
      </div>
      <div className="col-md-3">
        <button type="button" class="btn btn-dark d-inline-block">
          Add Student
        </button>
      </div>
    </div>
  </div>
  )
}

export default AddInstructor