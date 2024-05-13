import { createContext, useState } from "react";
import data from "../components/QuizApp/Constants.json";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quizData] = useState(data);
  const [quizId, setQuizId] = useState(0);
  const [selQuiz, setSelectedQuiz] = useState(null);
  //   console.log(quizData);

  const handleQuizData = (id) => {
    let data = [...quizData];
    // console.log(data[id]);
    setSelectedQuiz(data[id]);
  };

  const context = {
    selQuiz,
    quizId,
    setQuizId,
    handleQuizData,
  };

  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
};

export { QuizProvider, QuizContext };
