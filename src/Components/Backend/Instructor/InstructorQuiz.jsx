import React, { useEffect, useState } from "react";
import { getAll } from "../../../api/api";
import useAuth from "../../../Hooks/useAuth";
import QuizCom from "../QuizCom";

const InstructorQuiz = () => {
  const [show, setShow] = useState("quiz");

  const [load, setLoad] = useState(true);
  const [quiz, setQuiz] = useState([]);

  const { user } = useAuth();
  useEffect(() => {
    const get = async () => {
      const fetch = await getAll(`quiz/instructor/${user.email}`);
      setQuiz(fetch);
      setLoad(false);
    };
    get();
  }, []);

  const [submitted, setSubmitted] = useState([]);

  useEffect(() => {
    const get = async () => {
      const fetch = await getAll(`quiz/attended/instructor/${user?.email}`);
      setSubmitted(fetch);
      setLoad(false);
    };
    get();
  }, [show]);

  console.log(submitted)


  if (load) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <div>
      <button className="btn btn-primary m-2" onClick={() => setShow("saved")}>
        Submitted
      </button>
      <button className="btn btn-primary m-2" onClick={() => setShow("quiz")}>
        Pending
      </button>
      <QuizCom load={load} quiz={show == "quiz" ? quiz : submitted} submitted={show == "quiz" ? false : true}/>
    </div>
  );
};

export default InstructorQuiz;
