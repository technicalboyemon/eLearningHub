import React, { useEffect, useState } from "react";
import { getAll, postData } from "../../../api/api";
import useAuth from "../../../Hooks/useAuth";
import QuizCom from "../QuizCom";
const AttendQuiz = () => {
  const [show, setShow] = useState("quiz");
  console.log(show);
  const [load, setLoad] = useState(true);
  const [quiz, setQuiz] = useState([]);

  const [subQuiz, setsubIndex] = useState(0);
  const [subIndex, setSubIndex] = useState([]);

  const { user } = useAuth();
  useEffect(() => {
    setsubIndex(0);
    setSubIndex([]);
    const get = async () => {
      const fetch = await getAll(`quiz/attend/${user?.email}`);
      console.log(fetch);
      setQuiz(fetch);
      setLoad(false);
    };
    get();
  }, [show]);

  const [submitted, setSubmitted] = useState([]);

  useEffect(() => {
    setsubIndex(0);
    setSubIndex([]);
    const get = async () => {
      const fetch = await getAll(`quiz/save/${user?.email}`);
      setSubmitted(fetch);
      setLoad(false);
    };
    get();
  }, [show]);

  const [subjects, setSubjects] = useState([]);
  console.log(subjects);

  useEffect(() => {
    const chars =
      show === "quiz"
        ? quiz?.map((i) => i.subject)
        : submitted?.map((i) => i.subject);
    const uniqueChars = [...new Set(chars)];
    setSubjects(uniqueChars);
  }, [quiz]);

  console.log(subIndex);

  const handlesubIndex = (data) => {
    const value =
      show === "quiz"
        ? quiz?.filter((i) => i.subject == data)
        : submitted?.filter((i) => i.subject == data);
    setSubIndex(value);
  };

  const qsInfo = quiz?.find((i) => i?._id === subIndex[subQuiz]?._id);

  const [finalSubmit, setFinalSubmit] = useState([]);
  const handleQuestion = (id, ans) => {
    console.log(subIndex[subQuiz]._id, id, ans);

    const qsInfo = quiz.find((i) => i._id === subIndex[subQuiz]._id);
    const qsIdx = quiz.findIndex((i) => i._id === subIndex[subQuiz]._id);

    let qsData = qsInfo.questions.find((t) => t.id == id);
    if (qsData) {
      qsData["studentAns"] = ans;
      if (ans == qsData.ans) {
        qsData["right"] = 1;
      } else {
        qsData["right"] = 0;
      }
    }
    setFinalSubmit(qsInfo);
    const qsFilter = quiz.filter((i) => i._id != subIndex[subQuiz]._id);
    qsFilter.splice(qsIdx, 0, qsInfo);
    setQuiz(qsFilter);

    // const qs = quiz.filter((i) => {
    //   let qsData = i.questions.find((t) => t.id == id);
    //   if (qsData) {
    //     qsData["studentAns"] = ans;
    //     if (ans == qsData.ans) {
    //       qsData["right"] = 1;
    //     } else {
    //       qsData["right"] = 0;
    //     }
    //   }
    //   return qsData;
    // });
    // setMarks(qs.map((i) => i.questions.map((t) => t.right)));
  };

  const handleSave = () => {
    const postNow = {
      qsRef: finalSubmit._id,
      questions: finalSubmit?.questions,
      user: user?.email,
      total: qsInfo?.questions?.length,
      got: (qsInfo?.questions?.filter((i) => i?.right)).length,
      instructorUid: subIndex[subQuiz]?.instructorUid,
      subject: subIndex[subQuiz]?.subject,
    };
    const save = postData(`quiz/save/${user?.email}`, postNow);
    console.log(save);
  };

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
      <br></br>
      {show == "quiz" ? (
        <>
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
                <h4>Subject: {subIndex[subQuiz]?.subject}</h4>
              </div>
              <div className="my-2">
                <h4 className="my-2">Questions:</h4>
                <div className="row">
                  <div className="col-md-10">
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
                                  type="radio"
                                  name={`studentAns${i?._id}${idx}`}
                                  value={i.right ? "on" : "off"}
                                  onChange={(e) =>
                                    handleQuestion(i.id, "answer1")
                                  }
                                  className="mx-2 form-check-input"
                                />
                                1. {i.answer1}
                              </div>
                              <div className="col-md-3">
                                <input
                                  type="radio"
                                  name={`studentAns${i?._id}${idx}`}
                                  onChange={(e) =>
                                    handleQuestion(i.id, "answer2")
                                  }
                                  className="mx-2 form-check-input"
                                />
                                2. {i.answer2}
                              </div>
                              <div className="col-md-3">
                                <input
                                  type="radio"
                                  name={`studentAns${i?._id}${idx}`}
                                  onChange={(e) =>
                                    handleQuestion(i.id, "answer3")
                                  }
                                  className="mx-2 form-check-input"
                                />
                                3. {i.answer3}
                              </div>
                              <div className="col-md-3">
                                <input
                                  type="radio"
                                  name={`studentAns${i?._id}${idx}`}
                                  onChange={(e) =>
                                    handleQuestion(i.id, "answer4")
                                  }
                                  className="mx-2 form-check-input"
                                />
                                4. {i.answer4}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      className="btn-primary btn"
                      onClick={() => handleSave()}
                    >
                      Submit
                    </button>
                  </div>
                  {/* <div className="col-md-2">
                    <div className="m-2 bg-white p-3">
                      Total: {qsInfo?.questions?.length}
                      <br></br>
                      Got: {qsInfo?.questions?.filter((i) => i?.right)?.length}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="my-2">
          {subjects.map((i) => (
            <button
              className="btn btn-primary m-2"
              onClick={() => handlesubIndex(i)}
            >
              {i}
            </button>
          ))}
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

          {subIndex.length > 0 && (
            <>
              <h4 className="my-2">Questions:</h4>
              <div className="row">
                <div className="col-md-10">
                  {subIndex[subQuiz]?.questions?.map((i, idx) => (
                    <div>
                      <div className="my-2 bg-white p-2">
                        <div className="fw-bold text-primary my-2">
                          <span>Question {idx + 1}</span>
                          <br></br>
                          <span>Answer: {i.ans.split("answer")[1]}</span>
                        </div>
                        <h4>{i.question}</h4>
                        <div>
                          <div className="row">
                            <div className="col-md-3">
                              <input
                                type="checkbox"
                                checked={i.studentAns == "answer1"}
                                className="mx-2 form-check-input"
                              />
                              1. {i.answer1}
                            </div>
                            <div className="col-md-3">
                              <input
                                type="checkbox"
                                checked={i.studentAns == "answer2"}
                                className="mx-2 form-check-input"
                              />
                              2. {i.answer2}
                            </div>
                            <div className="col-md-3">
                              <input
                                type="checkbox"
                                checked={i.studentAns == "answer3"}
                                className="mx-2 form-check-input"
                              />
                              3. {i.answer3}
                            </div>
                            <div className="col-md-3">
                              <input
                                type="checkbox"
                                checked={i.studentAns == "answer4"}
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

                <div className="col-md-2">
                  <div className="m-2 bg-white p-3">
                    Total: {subIndex[subQuiz]?.total}
                    <br></br>
                    Got: {subIndex[subQuiz]?.got}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AttendQuiz;
