import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getAll, postData } from "../../api/api";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { BsX, BsPencilSquare, BsTrash } from "react-icons/bs";
import Translate from "./../Translate";
const arr = ["answer1", "answer2", "answer3", "answer4"];

const Quiz = () => {
  let navigate = useNavigate();
  const { user, trans } = useAuth();
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
    // console.log(quizes);
    setQuestions(quizes);
    setEdit(null);
    setQuiz(initialState);
  };

  // console.log(students);

  const save = async () => {
    if (students.length == 0) return alert("No student assigned");
    if (questions.length == 0) return alert("Add at least one question");
    if (!subject) return alert("Add a subject");

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
    // console.log(data);
  };

  return (
    <div className="d-inline-flex align-items-start form_layout">
      <div className="form w-75 mx-2">
        <div className="form_border">
          <div className="form_title">
            {/* <h4 className="form_title_name">{subject}</h4> */}
            <div className="">
              {/* <label className="form-label">Subject</label> */}
              <input
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                className="form-control form_border_style"
                placeholder="Untitled form"
              />
            </div>
          </div>
        </div>

        {questions.map((i, idx) => (
          <div>
            <div className="form_question_show my-4 bg-white px-4 py-3">
              <div className="fw-bold text-primary my-3">
                {/* <span className="fw-bold">Question {idx + 1}</span> */}
              </div>
              <div className="form_question_show_fontSize pb-4">
                {i.question}
              </div>
              <div>
                <div className="row">
                  <div className="col-md-3">
                    <input
                      type="checkbox"
                      checked={i.ans == "answer1"}
                      className="mx-2 form-check-input"
                    />
                    <span className="form_question_ans_fontSize">
                      {i.answer1}
                    </span>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="checkbox"
                      checked={i.ans == "answer2"}
                      className="mx-2 form-check-input"
                    />
                    <span className="form_question_ans_fontSize">
                      {i.answer2}
                    </span>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="checkbox"
                      checked={i.ans == "answer3"}
                      className="mx-2 form-check-input"
                    />
                    <span className="form_question_ans_fontSize">
                      {i.answer3}
                    </span>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="checkbox"
                      checked={i.ans == "answer4"}
                      className="mx-2 form-check-input"
                    />
                    <span className="form_question_ans_fontSize">
                      {i.answer4}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-end">
                <span
                  className="form_question_action_btn me-2"
                  onClick={() => {
                    handleEdit(`${idx}`);
                  }}
                >
                  <BsPencilSquare />
                </span>
                <span
                  className="form_question_action_btn"
                  onClick={() => {
                    setQuestions(questions.filter((i, ix) => ix != idx));
                  }}
                >
                  <BsTrash />
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="my-4 form_question">
          {/* <label className="form-label">Question</label> */}
          <input
            onChange={(e) => handleQuiz(e)}
            type="text"
            name="question"
            className="form-control form_question_border_style my-2 "
            value={quiz?.question}
            placeholder="Question"
          />
          <div className="row my-4 justify-content-start align-items-center">
            {arr.map((i, idx) => (
              <div className="col-md-12 my-1 ">
                {/* <label className="form-label">{idx + 1}</label> */}
                <div className="d-flex justify-content-start align-items-center">
                  <input
                    type="radio"
                    checked={quiz.ans == i}
                    className="mx-2 checkbox_size"
                    onChange={() => setQuiz({ ...quiz, ans: i })}
                  />
                  <input
                    onChange={(e) => handleQuiz(e)}
                    type="text"
                    name={i}
                    className="form-control form_options_border_style"
                    value={getValueInput(i)}
                    placeholder={"Options " + (idx + 1)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {edit ? (
          <button
            onClick={() => updateQuiz()}
            className="form_question_update_btn"
          >
            <Translate text={"Update Quiz"} type={trans} />
          </button>
        ) : (
          <button
            onClick={() => adQuiztoui()}
            className="form_question_add_btn"
          >
            <Translate text={"Add Quiz"} type={trans} />
          </button>
        )}
      </div>

      <div className="w-25 ">
        <div className="form_assign mx-2">
          <div className="my-2">
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
          </div>
          <div>
            {students.map((i) => (
              <p className="p-2 bg-secondary text-white form_selected_user_fontSize">
                {i?.name}
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
        </div>
        <div className="mt-4 mx-2">
          {questions.length > 0 && (
            <button onClick={save} className="form_question_submit_btn py-4 h5">
              <Translate text={"Save Form"} type={trans} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
