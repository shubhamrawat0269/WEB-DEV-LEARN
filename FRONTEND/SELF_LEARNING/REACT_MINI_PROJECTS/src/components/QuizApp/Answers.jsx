import React from "react";

const Answers = ({ qId, quiz, dispatchQuizData, setQuizId }) => {
  console.log(qId);
  //For Ref {
  //   "Question": "What is the chemical of Water?",
  //   "AnswerOptions": [
  //     { "text": "CO2", "isCorrect": false },
  //     { "text": "H2O", "isCorrect": true },
  //     { "text": "NaCl", "isCorrect": false },
  //     { "text": "NH3", "isCorrect": false }
  //   ]
  // },
  return (
    <div className=" text-white w-6/12 flex flex-col justify-between my-5">
      <div className="mt-2 flex flex-col gap-3 justify-center items-center">
        {quiz?.AnswerOptions.map((curr, id) => {
          return (
            <label
              key={id}
              htmlFor={`answer-${id}`}
              className="border p-2 w-[30rem] rounded-xl hover:bg-neutral-500 cursor-pointer flex gap-2 items-center md:justify-left border-gray-300"
            >
              <input type="radio" name={`answer`} id={`answer-${id}`} />
              <span className="text-md font-bold">{curr?.text}</span>
            </label>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row gap-3 my-10 justify-center items-center">
        <button
          className={`${
            qId > 0
              ? "bg-transparent w-80 md:w-32 border p-2 rounded-lg font-bold"
              : "bg-transparent w-80 md:w-32 border p-2 rounded-lg font-bold disabled"
          }`}
          onClick={() => setQuizId(qId - 1)}
        >
          Previous
        </button>
        <button
          className={`${
            qId < 9
              ? "bg-blue-300 w-80 md:w-32 text-black font-bold border p-2 rounded-lg"
              : "bg-blue-300 w-80 md:w-32 text-black font-bold border p-2 rounded-lg disabled"
          }`}
          onClick={() => setQuizId(qId + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Answers;
