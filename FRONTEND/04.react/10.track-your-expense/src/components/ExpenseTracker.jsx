import { useState } from "react";
import ExpenseHeader from "./ExpenseHeader";
import TotalBalance from "./TotalBalance";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";

// { id: 1, title: "Grocery Shopping", category: "Food", amount: 120 },
//     {
//       id: 2,
//       title: "Netflix Subscription",
//       category: "Entertainment",
//       amount: 15,
//     },
//     { id: 3, title: "Electricity Bill", category: "Utilities", amount: 85 },
//     { id: 4, title: "New Keyboard", category: "Technology", amount: 150 },
//     { id: 5, title: "Gym Membership", category: "Health", amount: 50 },

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  // Form States
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: 0,
  });

  // Filter & Sort States
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

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
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
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
    <div className="expense-tracker-container">
      {/* Expense Heacher */}
      <ExpenseHeader />
      {/* Total Balance */}
      <TotalBalance totalAmount={totalAmount} />
      {/* Expense Form */}
      <ExpenseForm
        expense={expense}
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
    </div>
  );
};

export default ExpenseTracker;
