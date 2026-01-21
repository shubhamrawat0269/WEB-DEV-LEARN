import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseHeader from "./ExpenseHeader";
import ExpenseTable from "./ExpenseTable";
import ExpenseTotalBalance from "./ExpenseTotalBalance";
import { useFilter } from "../hooks/useFilter";

const categories = [
  "Food",
  "Entertainment",
  "Utilities",
  "Health",
  "Technology",
  "Travel",
  "Education",
];

const ExpenseTracker = () => {
  const sortOrder = "asc";
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: 0,
  });
  const [totalExpense, setTotalExpense] = useState(0);
  const [errors, setErrors] = useState({});

  const inputValidConfig = {
    title: [{ required: true, message: "Title field is required" }],
    category: [{ required: true, message: "Category field is required" }],
    amount: [{ required: true, message: "Amount field is required" }],
  };

  const [filterData, setQuery] = useFilter(expenses, (data) => data.category);
  // console.log(filterData);

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

    // console.log(errorData);
    setErrors(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validInput = validateInput(expense);

    if (Object.keys(validInput).length !== 0) return;

    setExpenses((preState) => [...preState, expense]);
    setTotalExpense((preState) => Number(preState) + Number(expense.amount));
    setExpense({
      title: "",
      category: "",
      amount: 0,
    });
  };

  return (
    <section className="expense-tracker-container">
      {/* section header */}
      <ExpenseHeader />
      {/* expense total balance */}
      <ExpenseTotalBalance totalExpense={totalExpense} />
      {/* Expense Form  */}
      <ExpenseForm
        errors={errors}
        expense={expense}
        categories={categories}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      {/* Expense Table */}
      <ExpenseTable
        expenses={filterData}
        sortOrder={sortOrder}
        categories={categories}
        setQuery={setQuery}
      />
    </section>
  );
};

export default ExpenseTracker;
