import React, { useEffect, useState } from "react";
import { getAll, patchData } from "../../api/api";
import useAuth from "../../Hooks/useAuth";

const QuizCom = ({ quiz, submitted }) => {
  const [users, setUsers] = useState([]);
  const [subQuiz, setsubIndex] = useState(0);
  const [subIndex, setSubIndex] = useState([]);

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
    setSubIndex([])
    setsubIndex(0)
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
      {subjects.map((i) => (
        <button
          className="btn btn-primary m-2"
          onClick={() => handlesubIndex(i)}
        >
          {i}
        </button>
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
          <div className="my-2">
            <h1>Assigned Users:</h1>
            {submitted ? (
              <p>{subIndex[subQuiz]?.user}</p>
            ) : (
              <div className="d-flex my-2">
                {subIndex[subQuiz]?.showUsers?.map((i) => (
                  <p className="p-2 bg-secondary m-2 text-white">{i?.email}</p>
                ))}
              </div>
            )}
          </div>

          <div className="my-2">
            <label className="form-label fw-bold">Select Users</label>
            <select
              className="form-select"
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
              <option selected>Add Students</option>
              {users?.map((i) => (
                <>
                  <option value={i?._id}>{i?.name}</option>
                </>
              ))}
            </select>
            <div className="d-flex">
              {students.map((i) => (
                <p className="p-2 bg-secondary m-2 text-white">
                  {i?.name}{" "}
                  <span
                    className="ms-2"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setStudents(students.filter((t) => t?._id != i._id))
                    }
                  >
                    X
                  </span>
                </p>
              ))}
            </div>
            <button className="btn btn-warning my-2 m-2" onClick={assignUser}>
              Add Users
            </button>
          </div>
          <div className="my-2">
            <h1>Subject:</h1>
            <h4>{subIndex[subQuiz]?.subject}</h4>
          </div>
          <div className="my-2">
            <h1>Questions:</h1>
            {subIndex[subQuiz]?.questions?.map((i, idx) => (
              <div>
                <div className="my-2 bg-white p-2">
                  <div className="fw-bold text-primary my-2">
                    <span>Question {idx + 1}</span>
                  </div>
                  <h4>{i.question}</h4>
                  <div>
                    <div className="row">
                      <div className="col-md-3">
                        <input
                          type="checkbox"
                          checked={i.ans == "answer1"}
                          className="mx-2 form-check-input"
                        />
                        1. {i.answer1}
                      </div>
                      <div className="col-md-3">
                        <input
                          type="checkbox"
                          checked={i.ans == "answer2"}
                          className="mx-2 form-check-input"
                        />
                        2. {i.answer2}
                      </div>
                      <div className="col-md-3">
                        <input
                          type="checkbox"
                          checked={i.ans == "answer3"}
                          className="mx-2 form-check-input"
                        />
                        3. {i.answer3}
                      </div>
                      <div className="col-md-3">
                        <input
                          type="checkbox"
                          checked={i.ans == "answer4"}
                          className="mx-2 form-check-input"
                        />
                        4. {i.answer4}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizCom;
