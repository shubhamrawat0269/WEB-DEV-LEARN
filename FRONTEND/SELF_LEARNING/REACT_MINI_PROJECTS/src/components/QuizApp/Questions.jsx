import React from "react";

const Questions = ({ qId, quiz }) => {
  // {
  //   "Question": "What is the chemical of Water?",
  //   "AnswerOptions": [
  //     { "text": "CO2", "isCorrect": false },
  //     { "text": "H2O", "isCorrect": true },
  //     { "text": "NaCl", "isCorrect": false },
  //     { "text": "NH3", "isCorrect": false }
  //   ]
  // },
  return (
    <div className="p-3 text-white font-bold text-center md:text-left w-6/12 brdr-right-silver">
      <h3 className="text-2xl">Questions {qId + 1}</h3>
      <div className="mt-2 text-xl font-semibold">{quiz?.Question}</div>
    </div>
  );
};

export default Questions;
