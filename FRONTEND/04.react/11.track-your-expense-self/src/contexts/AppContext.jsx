import { createContext, useEffect, useState } from "react";
import { inputValidConfig } from "../utils/dummy-data";
import { useFilter } from "../hooks/useFilter";
import useLocalStorage from "../hooks/useLocalStorage";

const AppContext = createContext();

function AppProvider({ children }) {
  const [sortOrder, setSortOrder] = useState("");
  const [expenseUpdatedRowId, setExpenseUpdatedRowId] = useLocalStorage("expenseUpdatedRowId","");
  const [expenses, setExpenses] = useLocalStorage('expenses', []);

  const [expense, setExpense] = useLocalStorage("expense",{
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

  const [filterData, setQuery] = useFilter(expenses, (data) => data.category);

  const totalExpenseAmount = filterData.reduce(
    (acc, curr) => Number(acc) + Number(curr.amount),
    0,
  );

  const updateExistingRecord = () => {
    if (expenseUpdatedRowId) {
      setExpenses((preState) => {
        return preState.map((prevExpense) => {
          if (prevExpense.id === expenseUpdatedRowId)
            return { ...expense, id: expenseUpdatedRowId };
          return prevExpense;
        });
      });

      setExpense({
        title: "",
        category: "",
        amount: 0,
      });

      setExpenseUpdatedRowId("");
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validInput = validateInput(expense);
    updateExistingRecord();

    if (Object.keys(validInput).length !== 0) return;
    setExpenses((preState) => [
      ...preState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: 0,
    });
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  useEffect(() => {
    expenses.sort((a, b) => {
      if (sortOrder === "asc") return a.amount - b.amount;
      else return b.amount - a.amount;
    });
  }, [sortOrder]);

  const values = {
    sortOrder,
    handleSort,
    expenses,
    expense,
    errors,
    filterData,
    setErrors,
    setExpense,
    setExpenses,
    setQuery,
    handleSubmit,
    expenseUpdatedRowId,
    updateExistingRecord,
    handleInputChange,
    validateInput,
    totalExpenseAmount,
    setExpenseUpdatedRowId,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
