import React, { useContext, useEffect } from "react";
import Questions from "./Questions";
import Answers from "./Answers";
import { QuizContext } from "../../contexts/QuizContext";

const QuestionAnswer = () => {
  const { selQuiz, handleQuizData, quizId, setQuizId } =
    useContext(QuizContext);

  useEffect(() => {
    handleQuizData(quizId);
  }, [quizId]);

  return (
    <div className="md:flex md:justify-between h-[35rem] px-10 brdr-silver">
      {/* QuestionSection  */}
      <Questions quiz={selQuiz} qId={quizId} />
      {/* AnswerSection  */}
      <Answers
        qId={quizId}
        quiz={selQuiz}
        dispatchQuizData={handleQuizData}
        setQuizId={setQuizId}
      />
    </div>
  );
};

export default QuestionAnswer;
