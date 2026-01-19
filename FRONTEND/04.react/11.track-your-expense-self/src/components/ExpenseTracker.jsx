import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseHeader from "./ExpenseHeader";
import ExpenseTable from "./ExpenseTable";
import ExpenseTotalBalance from "./ExpenseTotalBalance";

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
  const totalExpense = 200;
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: 0,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setExpense((preState) => ({
      ...preState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setExpenses((preState) => [...preState, expense]);
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
        expense={expense}
        categories={categories}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      {/* Expense Table */}
      <ExpenseTable expenses={expenses} sortOrder={sortOrder} />
    </section>
  );
};

export default ExpenseTracker;
