import React from "react";
import { questionsList } from "../../utils";
// questionsList;

const QuestionAnswerList = ({ q, a, key, uId }) => {
  return (
    <details
      key={key}
      open={uId === 0 ? true : false}
      className="border rounded-md p-2 mb-2"
    >
      <summary>{q}</summary>
      <span className="">{a}</span>
    </details>
  );
};

const FAQ = () => {
  return (
    <div className="bg-yellow-500 h-[93.5vh] grid place-content-center">
      <div className="bg-white w-[40rem] p-5">
        <h1 className="text-center my-3">FAQ</h1>

        <div>
          {questionsList.map((cur, id) => {
            return (
              <QuestionAnswerList
                uId={id}
                key={id}
                a={cur.answer}
                q={cur.question}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
