import React, { useEffect, useState } from "react";
import { getAll, patchData } from "../../api/api";
import useAuth from "../../Hooks/useAuth";
import Translate from "./../Translate";
import { BsX, BsPencilSquare, BsTrash } from "react-icons/bs";
const QuizCom = ({ quiz, submitted }) => {
  const [users, setUsers] = useState([]);
  const [subQuiz, setsubIndex] = useState(0);
  const [subIndex, setSubIndex] = useState([]);
  const { trans } = useAuth();
  useEffect(() => {
    const getUser = async () => {
      const fetch = await getAll("users");
      setUsers(fetch);
    };
    getUser();
  }, []);

  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    setSubIndex([]);
    setsubIndex(0);
    const chars = quiz?.map((i) => i.subject);
    const uniqueChars = [...new Set(chars)];
    setSubjects(uniqueChars);
  }, [quiz]);

  const handlesubIndex = (data) => {
    const value = quiz.filter((i) => i.subject == data);
    setSubIndex(value);
  };

  const assignUser = async () => {
    const data = await patchData(
      `quiz/updateUser/${subIndex[subQuiz]._id}`,
      students
    );
    if (data?.modifiedCount) return alert("Student Added");
    // console.log(data);
  };

  return (
    <div>
      {subjects.map((i, index) => (
        <div
          className="form_responses_result my-4"
          onClick={() => handlesubIndex(i)}
        >
          {index + 1}. <Translate text={i} type={trans} />
        </div>
      ))}

      {subIndex.length > 0 && (
        <div>
          {/* <div className="my-2">
            {subIndex.map((i, idx) => (
              <button
                className="btn btn-warning my-2 m-2"
                onClick={() => setsubIndex(idx)}
              >
                No {idx + 1}
              </button>
            ))}
          </div> */}
          <div className="d-flex">
            <div className="w-75">
              <div className="form_border">
                {/* <h1>Subject:</h1> */}
                <div className="form_title fs-3">
                  <Translate text={subIndex[subQuiz]?.subject} type={trans} />
                </div>
              </div>
              <div className="form_question_show my-4 bg-white px-4 py-3">
                {/* <h1>Questions:</h1> */}
                {subIndex[subQuiz]?.questions?.map((i, idx) => (
                  <div>
                    <div className="my-2 bg-white p-2">
                      <span className="form_question_show_fontSize pb-4">
                        {idx + 1}. <Translate text={i.question} type={trans} />
                      </span>
                      <div>
                        <div className="row">
                          <div className="col-md-3">
                            <input
                              type="checkbox"
                              checked={i.ans == "answer1"}
                              className="mx-2 form-check-input"
                            />
                            <span className="form_question_ans_fontSize">
                              <Translate text={i.answer1} type={trans} />
                            </span>
                          </div>
                          <div className="col-md-3">
                            <input
                              type="checkbox"
                              checked={i.ans == "answer2"}
                              className="mx-2 form-check-input"
                            />
                            <span className="form_question_ans_fontSize">
                              <Translate text={i.answer2} type={trans} />
                            </span>
                          </div>
                          <div className="col-md-3">
                            <input
                              type="checkbox"
                              checked={i.ans == "answer3"}
                              className="mx-2 form-check-input"
                            />
                            <span className="form_question_ans_fontSize">
                              <Translate text={i.answer3} type={trans} />
                            </span>
                          </div>
                          <div className="col-md-3">
                            <input
                              type="checkbox"
                              checked={i.ans == "answer4"}
                              className="mx-2 form-check-input"
                            />
                            <span className="form_question_ans_fontSize">
                              <Translate text={i.answer4} type={trans} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-25 mx-2">
              <div className="form_border text-center mb-3">
                <div className="form_title text-center">
                  <div className="form_assign_title text-center">
                    <Translate text={"Assigned User"} type={trans} />
                  </div>
                  {submitted ? (
                    <p className="form_assign_user_fontSize">
                      {subIndex[subQuiz]?.user}
                    </p>
                  ) : (
                    <div className="my-2  text-center">
                      {subIndex[subQuiz]?.showUsers?.map((i) => (
                        <p className="form_assign_user_fontSize text-center">
                          {i?.email}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="form_assign text-center mx-2">
                <label className="form-label form_assign_title">
                  <Translate text={"Select Users"} type={trans} />
                </label>
                <select
                  className="form-select mb-4"
                  onChange={(e) => {
                    setStudents([
                      ...students,
                      {
                        ...users.find((i) => i._id == e.target.value),
                        isSubmitted: false,
                      },
                    ]);
                  }}
                >
                  <option selected>
                    <Translate text={"Add Students"} type={trans} />
                  </option>
                  {users?.map((i) => (
                    <>
                      <option value={i?._id}>{i?.name}</option>
                    </>
                  ))}
                </select>
                <div className="d-flex">
                  {students.map((i) => (
                    <p className="p-2 bg-secondary text-white form_selected_user_fontSize">
                      {i?.name}{" "}
                      <span
                        className="ms-2"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setStudents(students.filter((t) => t?._id != i._id))
                        }
                      >
                        <BsX />
                      </span>
                    </p>
                  ))}
                </div>
                <button
                  className="form_question_add_btn w-100"
                  onClick={assignUser}
                >
                  <Translate text={"Add Users"} type={trans} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizCom;
