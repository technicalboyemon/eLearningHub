import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getAll, postData } from "../../api/api";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const arr = ["answer1", "answer2", "answer3", "answer4"];

const Quiz = () => {
  let navigate = useNavigate();
  const { user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const fetch = await getAll("users");
      setUsers(fetch);
    };
    getUser();
  }, []);

  const [students, setStudents] = useState([]);
  const [subject, setSubject] = useState("");
  const [questions, setQuestions] = useState([]);

  const initialState = {
    id: nanoid(),
    question: "",
    ans: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  };

  const [quiz, setQuiz] = useState(initialState);

  const handleQuiz = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const adQuiztoui = () => {
    if (
      !quiz.question ||
      !quiz.answer1 ||
      !quiz.answer2 ||
      !quiz.answer3 ||
      !quiz.answer4 ||
      !quiz.ans
    )
    return alert("please fill all the fields.");
    setQuestions([...questions, quiz]);
    setQuiz(initialState);
  };

  const getValueInput = (data) => {
    switch (data) {
      case "answer1":
        return quiz.answer1;
      case "answer2":
        return quiz.answer2;
      case "answer3":
        return quiz.answer3;
      case "answer4":
        return quiz.answer4;
    }
  };

  const [edit, setEdit] = useState(null);
  const handleEdit = (idx) => {
    setEdit(idx);
    setQuiz(questions.find((i, ix) => ix == idx));
  };

  const updateQuiz = () => {
    if (
      !quiz.question ||
      !quiz.answer1 ||
      !quiz.answer2 ||
      !quiz.answer3 ||
      !quiz.answer4 ||
      !quiz.ans
    )
      return alert("please fill all the fields.");
    const quizes = questions.filter((i, ix) => ix != edit);
    quizes.splice(edit, 0, quiz);
    console.log(quizes);
    setQuestions(quizes);
    setEdit(null);
    setQuiz(initialState);
  };

  console.log(students);

  const save = async () => {
    
    if(students.length == 0) return alert("No student assigned");
    if(questions.length == 0) return alert("Add at least one question");
    if(!subject) return alert("Add a subject");

    const post = {
      showUsers: students,
      questions: questions,
      instructorUid: user.email,
      subject: subject,
    };

    const data = await postData("quiz/add", post);
    if (data.insertedId) {
      navigate("/adminDashboard/allQuiz");
    }
    console.log(data);
  };

  return (
    <div>
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
      </div>
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
      <div className="my-2">
        <label className="form-label fw-bold">Subject</label>
        <input
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>

      <h1 className="mt-5">{subject}</h1>
      {questions.map((i, idx) => (
        <div>
          <div className="my-2 bg-white p-2">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                setQuestions(questions.filter((i, ix) => ix != idx));
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-primary btn-sm ms-2"
              onClick={() => {
                handleEdit(`${idx}`);
              }}
            >
              Edit
            </button>
            <br></br>
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

      {questions.length > 0 && (
        <button onClick={save} className="btn btn-warning text-white">
          Save Quiz
        </button>
      )}

      <div className="my-5">
        <label className="form-label fw-bold">Question</label>
        <input
          onChange={(e) => handleQuiz(e)}
          type="text"
          name="question"
          className="form-control"
          value={quiz?.question}
        />
        <div className="row justify-content-between align-items-center my-2">
          {arr.map((i, idx) => (
            <div className="col-md-3">
              <label className="form-label">{idx + 1}</label>
              <div className="d-flex justify-content-between align-items-center">
                <input
                  type="checkbox"
                  checked={quiz.ans == i}
                  className="mx-2 form-check-input"
                  onChange={() => setQuiz({ ...quiz, ans: i })}
                />
                <input
                  onChange={(e) => handleQuiz(e)}
                  type="text"
                  name={i}
                  className="form-control"
                  value={getValueInput(i)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {edit ? (
        <button onClick={() => updateQuiz()} className="btn btn-primary">
          Update Quiz
        </button>
      ) : (
        <button
          onClick={() => adQuiztoui()}
          className="btn btn-warning text-white"
        >
          Add Quiz
        </button>
      )}
    </div>
  );
};

export default Quiz;
