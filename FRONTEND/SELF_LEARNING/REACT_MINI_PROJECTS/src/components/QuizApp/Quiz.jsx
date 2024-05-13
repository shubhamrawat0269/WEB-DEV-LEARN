import React from "react";
import Header from "./Header";
import QuestionAnswer from "./QuestionAnswer";
import { QuizProvider } from "../../contexts/QuizContext";

const Quiz = () => {
  return (
    <QuizProvider>
      <div className="bg-zinc-700 w-screen p-5">
        <div className="md:w-5/6 m-auto h-full">
          {/* Header  */}
          <Header />
          {/* QuestionAnswer Section  */}
          <QuestionAnswer />
        </div>
      </div>
    </QuizProvider>
  );
};

export default Quiz;
