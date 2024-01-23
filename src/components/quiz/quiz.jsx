import { data } from "../../data";
import React, { useState } from "react";

export const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(data[index]);

  const checkAns = (e, ans) => {
    if (questions.ans === ans) {
      e.target.classList.toggle("correct");
    } else {
      // e.target.classList.toggle("wrong");
    }
  };

  const handleNext = () => {
    // Update index to move to the next question
    setIndex((prevIndex) => prevIndex + 1);

    // Update questions state with the new question
    setQuestions(data[index + 1]);
  };

  return (
    <div className="container">
      <h1 className="text-center text-5xl font-extrabold text-green-500">
        Quiz App
      </h1>
      <hr />
      <h2 className="font-bold text-xl text-green-900 text-center">
        {index + 1}. {questions.question}
      </h2>
      <ul>
        <li
          onClick={(e) => {
            checkAns(e, 1);
          }}
          className="list text-green-900"
        >
          {questions.option1}
        </li>
        <li
          onClick={(e) => {
            checkAns(e, 2);
          }}
          className="list text-green-900"
        >
          {questions.option2}
        </li>
        <li
          onClick={(e) => {
            checkAns(e, 3);
          }}
          className="list text-green-900"
        >
          {questions.option3}
        </li>
        <li
          onClick={(e) => {
            checkAns(e, 4);
          }}
          className="list text-green-900"
        >
          {questions.option4}
        </li>
      </ul>
      <button className="text-white bg-green-600 text-center pt-2 pb-2">
        Next
      </button>
      <div className="text-center text-md">{index + 1} of {data.length} questions</div>
    </div>
  );
};
