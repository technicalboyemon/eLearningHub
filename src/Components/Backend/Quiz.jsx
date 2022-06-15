import React, { useState } from "react";

const Quiz = () => {
  const initialstate = {
    question: "",
    answer1: { bol: false, title: "" },
    answer2: { bol: false, title: "" },
    answer3: { bol: false, title: "" },
    answer4: { bol: false, title: "" },
  };

  const [questions, setQuestions] = useState([initialstate]);

  const questionHandle = (e, id) => {
    const oldValue = [...questions];
    oldValue[id].question = e.target.value;
    setQuestions(oldValue);
  };
  const answer1Handle = (e, id) => {
    const oldValue = [...questions];
    oldValue[id].answer1.title = e.target.value;
    setQuestions(oldValue);
  };
  const answer2Handle = (e, id) => {
    const oldValue = [...questions];
    oldValue[id].answer2.title = e.target.value;
    setQuestions(oldValue);
  };
  const answer3Handle = (e, id) => {
    const oldValue = [...questions];
    oldValue[id].answer3.title = e.target.value;
    setQuestions(oldValue);
  };
  const answer4Handle = (e, id) => {
    const oldValue = [...questions];
    oldValue[id].answer4.title = e.target.value;
    setQuestions(oldValue);
  };
  console.log(questions);
  return (
    <div>
      {questions.map((i, idx) => (
        <div>
          <h4>{i.question}</h4>
          <div>
            <div className="row">
              <div className="col-md-3">{i.answer1.title}</div>
              <div className="col-md-3">{i.answer2.title}</div>
              <div className="col-md-3">{i.answer3.title}</div>
              <div className="col-md-3">{i.answer4.title}</div>
            </div>
          </div>
        </div>
      ))}
      {questions.map((i, idx) => (
        <div key={idx}>
          <input
            onChange={(e) => questionHandle(e, idx)}
            value={i.question}
            type="text"
            name="question"
          />
          <input
            onChange={(e) => answer1Handle(e, idx)}
            value={i.answer1.title}
            type="text"
            name="answer1"
          />
          <input
            onChange={(e) => answer2Handle(e, idx)}
            value={i.answer2.title}
            type="text"
            name="answer2"
          />
          <input
            onChange={(e) => answer3Handle(e, idx)}
            value={i.answer3.title}
            type="text"
            name="answer3"
          />
          <input
            onChange={(e) => answer4Handle(e, idx)}
            value={i.answer4.title}
            type="text"
            name="answer4"
          />
        </div>
      ))}
      <button onClick={() => setQuestions([...questions, initialstate])}>
        Add
      </button>
    </div>
  );
};

export default Quiz;
