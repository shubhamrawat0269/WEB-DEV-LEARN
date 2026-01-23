import { createContext, useEffect, useState } from "react";
import { inputValidConfig } from "../utils/dummy-data";

const AppContext = createContext();

function AppProvider({ children }) {
  const sortOrder = "asc";
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses"))
      ? JSON.parse(localStorage.getItem("expenses"))
      : [],
  );

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: 0,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setExpense((preState) => ({
      ...preState,
      [id]: value,
    }));

    setErrors({});
  };

  const validateInput = (data) => {
    const errorData = {};
    Object.entries(data).forEach(([key, value]) => {
      inputValidConfig[key].forEach((rule) => {
        if (rule.required && !value) errorData[key] = rule.message;
      });
    });
    setErrors(errorData);
    return errorData;
  };

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  const values = {
    sortOrder,
    expenses,
    setExpenses,
    expense,
    setExpense,
    errors,
    setErrors,
    handleInputChange,
    validateInput,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
