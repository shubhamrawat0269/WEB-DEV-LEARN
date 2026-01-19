import { useState } from "react";
import ExpenseHeader from "./ExpenseHeader";
import TotalBalance from "./TotalBalance";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: 0,
  });

  // Filter & Sort States
  const [sortOrder, setSortOrder] = useState("asc");
  const [errors, setErrors] = useState({});
  const [categoryFilter, setCategoryFilter] = useState("All");

  const validateConfig = {
    title: [{ required: true, message: "title field is required" }],
    category: [{ required: true, message: "category field is required" }],
    amount: [{ required: true, message: "amount field is required" }],
  };

  // Derived State
  //   const filteredExpenses = expenses
  //     .filter(
  //       (expense) =>
  //         categoryFilter === "All" || expense.category === categoryFilter,
  //     )
  //     .sort((a, b) => {
  //       return sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount;
  //     });

  const filteredExpenses = expenses;

  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  const handleOnChange = (e) => {
    const { id, value } = e.target;

    setExpense((preState) => ({
      ...preState,
      [id]: value,
    }));

    setErrors({})
  };

  const validateInputs = (data) => {
    const errorObj = {};
    Object.entries(data).forEach(([key, value]) => {
      validateConfig[key].forEach((rule) => {
        if(rule.required && !value) errorObj[key] = rule.message;
      })
    });

    // console.log(errorObj)
    setErrors(errorObj);
    return errorObj;
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    validateInputs(expense);
    if (!expense.title || !expense.category || !expense.amount) return;

    const newExpense = {
      id: Date.now(),
      title: expense.title,
      category: expense.category,
      amount: parseFloat(expense.amount),
    };

    setExpenses((preState) => [...preState, newExpense]);
    setExpense({
      title: "",
      category: "",
      amount: 0,
    });
  };

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const categories = [
    "Food",
    "Entertainment",
    "Utilities",
    "Health",
    "Technology",
    "Travel",
    "Education",
  ];

  return (
    <section className="expense-tracker-container">
      {/* Expense Heacher */}
      <ExpenseHeader />
      {/* Total Balance */}
      <TotalBalance totalAmount={totalAmount} />
      {/* Expense Form */}
      <ExpenseForm
        expense={expense}
        errors={errors}
        categories={categories}
        handleAddExpense={handleAddExpense}
        handleOnChange={handleOnChange}
      />
      {/* Expense Table */}
      <ExpenseTable
        categories={categories}
        toggleSort={toggleSort}
        filteredExpenses={filteredExpenses}
        sortOrder={sortOrder}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
    </section>
  );
};

export default ExpenseTracker;
