import { data } from "../../data";
import React, { useRef, useState } from "react";

export const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  const option_array = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (questions.ans === ans) {
        e.target.classList.toggle(".correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.toggle("wrong");
        setLock(true);
        option_array[questions.ans - 1].current.classList.add("correct");
      }
    }
  };

  const handleNext = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(index + 1);
      setQuestions(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }

    // Update questions state with the new question
  };

  const reset = () => {
    setIndex(0);
    setQuestions(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div className="container">
      <h1 className="text-center text-5xl font-extrabold text-green-500">
        Quiz App
      </h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <h2 className="font-bold text-xl text-green-900 text-center">
            {index + 1}. {questions.question}
          </h2>
          <ul>
            <li
              ref={option1}
              onClick={(e) => {
                checkAns(e, 1);
              }}
              className="list text-green-900"
            >
              {questions.option1}
            </li>
            <li
              ref={option2}
              onClick={(e) => {
                checkAns(e, 2);
              }}
              className="list text-green-900"
            >
              {questions.option2}
            </li>
            <li
              ref={option3}
              onClick={(e) => {
                checkAns(e, 3);
              }}
              className="list text-green-900"
            >
              {questions.option3}
            </li>
            <li
              ref={option4}
              onClick={(e) => {
                checkAns(e, 4);
              }}
              className="list text-green-900"
            >
              {questions.option4}
            </li>
          </ul>
          <button
            onClick={handleNext}
            className="text-white bg-green-600 text-center pt-2 pb-2"
          >
            Next
          </button>
          <div className="text-center text-md">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            You Scored {score} out of {data.length}
          </h2>
          <button onClick={reset} className="text-white bg-green-600 text-center pt-2 pb-2">
            Reset
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
