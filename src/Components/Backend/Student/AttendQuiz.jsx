import React, { useEffect, useState } from "react";
import { getAll, postData } from "../../../api/api";
import useAuth from "../../../Hooks/useAuth";
import QuizCom from "../QuizCom";
import Translate from "./../../Translate";
const AttendQuiz = () => {
  const [show, setShow] = useState("quiz");
  console.log(show);
  const [load, setLoad] = useState(true);
  const [quiz, setQuiz] = useState([]);

  const [subQuiz, setsubIndex] = useState(0);
  const [subIndex, setSubIndex] = useState([]);

  const { user, trans } = useAuth();
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
    window.location.reload();
  };

  if (load) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">
          <Translate text="Loading..." type={trans} />
        </span>
      </div>
    );
  }

  return (
    <div>
      <div className="form_responses_submitted text-center py-4 w-100 bg-white text-black">
        <div className="fs-4 py-4">
          <Translate text="Attend Test" type={trans} />
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="form_responses_submitted_forms m-2"
            onClick={() => setShow("saved")}
          >
            <Translate text="Your Submitted Test" type={trans} />
          </div>
          <div
            className="form_responses_pending_forms m-2"
            onClick={() => setShow("quiz")}
          >
            <Translate text="Pending Test" type={trans} />
          </div>
        </div>
      </div>

      {show == "quiz" ? (
        <>
          {subjects.map((i, index) => (
            <div
              className="form_responses_result my-4"
              onClick={() => handlesubIndex(i)}
            >
              {index + 1}. <Translate text={i} type={trans} />
            </div>
          ))}
          {quiz.length === 0 && (
            <div className="form_question_show fs-3 my-4 bg-white px-4 py-3 text-center">
              <Translate
                text="Right Now, You Have Not Any Test Exam."
                type={trans}
              />
            </div>
          )}
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
                <div className="form_border">
                  {/* Subject: */}
                  <div className="form_title fs-3">
                    <Translate text={subIndex[subQuiz]?.subject} type={trans} />
                  </div>
                </div>
              </div>
              <div className="form_question_show my-4 bg-white px-4 py-3">
                {/* <h4 className="my-2">Questions:</h4> */}
                <div className="row">
                  <div className="col-md-10">
                    {subIndex[subQuiz]?.questions?.map((i, idx) => (
                      <div>
                        <div className="my-2 bg-white p-2">
                          {/* <div className="fw-bold text-primary my-2">
                            <span>Question {idx + 1}</span>
                          </div> */}
                          <span className="form_question_show_fontSize pb-4">
                            {idx + 1}.{" "}
                            <Translate text={i.question} type={trans} />
                          </span>
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
                                <span className="form_question_ans_fontSize">
                                  <Translate text={i.answer1} type={trans} />
                                </span>
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
                                <span className="form_question_ans_fontSize">
                                  <Translate text={i.answer2} type={trans} />
                                </span>
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
                                <span className="form_question_ans_fontSize">
                                  <Translate text={i.answer3} type={trans} />
                                </span>
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
                                <span className="form_question_ans_fontSize">
                                  <Translate text={i.answer4} type={trans} />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      className="form_question_add_btn"
                      onClick={() => handleSave()}
                    >
                      <Translate text="Submit Your Test" type={trans} />
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
          {subjects.map((i, index) => (
            <div
              className="form_responses_result my-4"
              onClick={() => handlesubIndex(i)}
            >
              {index + 1}. <Translate text={i} type={trans} />
            </div>
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
              {/* <h4 className="my-2">Questions:</h4> */}
              <div className="form_border">
                {/* Subject: */}
                <div className="form_title fs-3">
                  <Translate text={subIndex[subQuiz]?.subject} type={trans} />
                </div>
              </div>
              <div className="row justify-content-between mx-0">
                <div className="col-md-9 form_question_show my-4 bg-white">
                  <div className="">
                    {subIndex[subQuiz]?.questions?.map((i, idx) => (
                      <div className="">
                        <div className="my-2 bg-white p-2">
                          <div className="fw-bold text-primary my-2">
                            {/* <span>Question {idx + 1}</span>
                          <br></br> */}

                            {/* <span>Answer: {i.ans.split("answer")[1]}</span> */}
                          </div>
                          <span className="form_question_show_fontSize pb-4">
                            {idx + 1}.{" "}
                            <Translate text={i.question} type={trans} />
                          </span>
                          <div>
                            <div className="row">
                              <div className="col-md-3">
                                <input
                                  type="checkbox"
                                  checked={i.studentAns == "answer1"}
                                  className="mx-2 form-check-input"
                                />
                                <span className="form_question_ans_fontSize">
                                  <Translate text={i.answer1} type={trans} />
                                </span>
                              </div>
                              <div className="col-md-3">
                                <input
                                  type="checkbox"
                                  checked={i.studentAns == "answer2"}
                                  className="mx-2 form-check-input"
                                />
                                <span className="form_question_ans_fontSize">
                                  <Translate text={i.answer2} type={trans} />
                                </span>
                              </div>
                              <div className="col-md-3">
                                <input
                                  type="checkbox"
                                  checked={i.studentAns == "answer3"}
                                  className="mx-2 form-check-input"
                                />
                                <span className="form_question_ans_fontSize">
                                  <Translate text={i.answer3} type={trans} />
                                </span>
                              </div>
                              <div className="col-md-3">
                                <input
                                  type="checkbox"
                                  checked={i.studentAns == "answer4"}
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

                <div className="col-md-3 gx-0 ">
                  <div className="form_border ms-2 my-4">
                    <div className="form_title">
                      <div className="mx-2 py-4 bg-white text-center h4 p-3">
                        <span>
                          {" "}
                          <Translate text="Total Mark:" type={trans} />{" "}
                          <Translate
                            text={subIndex[subQuiz]?.total}
                            type={trans}
                          />
                        </span>
                        <br /> <hr />
                        <span className="fw-bolder">
                          {" "}
                          <Translate text="Your Result:" type={trans} />{" "}
                          <Translate
                            text={subIndex[subQuiz]?.got}
                            type={trans}
                          />
                        </span>
                      </div>
                    </div>
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
