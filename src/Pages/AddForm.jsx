import React from "react";
import AddQuiz from "./../Components/Backend/Quiz"
const AddForm = () => {
  return (
    <div>
      <div className="my-4">
        <div className="form_responses_submitted text-center my-4 py-4 w-100 bg-white text-black">
          <div className="fs-4 py-4">Add New Form</div>
        </div>
        <AddQuiz />
      </div>
    </div>
  );
};

export default AddForm;
