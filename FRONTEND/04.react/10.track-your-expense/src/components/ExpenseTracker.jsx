import { useState } from "react";

const ExpenseTracker = () => {
  // Dummy Data
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Grocery Shopping", category: "Food", amount: 120 },
    {
      id: 2,
      title: "Netflix Subscription",
      category: "Entertainment",
      amount: 15,
    },
    { id: 3, title: "Electricity Bill", category: "Utilities", amount: 85 },
    { id: 4, title: "New Keyboard", category: "Technology", amount: 150 },
    { id: 5, title: "Gym Membership", category: "Health", amount: 50 },
  ]);

  // Form States
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  // Filter & Sort States
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  // Derived State
  const filteredExpenses = expenses
    .filter(
      (expense) =>
        categoryFilter === "All" || expense.category === categoryFilter,
    )
    .sort((a, b) => {
      return sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount;
    });

  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!title || !category || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      category,
      amount: parseFloat(amount),
    };

    setExpenses([...expenses, newExpense]);
    setTitle("");
    setCategory("");
    setAmount("");
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
      <header className="header-section">
        <h1 className="title">Expense Tracker</h1>
      </header>

      {/* Total Balance */}
      <div className="total-balance-card">
        <span className="total-label">Total Expenses</span>
        <span className="total-amount">${totalAmount.toFixed(2)}</span>
      </div>

      {/* Expense Form */}
      <div className="expense-form-container">
        <h2 className="form-title">Add New Expense</h2>
        <form className="expense-form" onSubmit={handleAddExpense}>
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              className="form-input"
              placeholder="e.g. Monthly Rent"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled hidden>
                Select Category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              className="form-input"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <button type="submit" className="add-btn">
            Add Expense
          </button>
        </form>
      </div>

      {/* Expense Table */}
      <div className="expense-table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>
                <div className="header-control">
                  Category
                  <select
                    className="filter-select"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option value="All">All</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </th>
              <th onClick={toggleSort} style={{ cursor: "pointer" }}>
                <div className="header-control">
                  Amount
                  <span className="sort-icon">
                    {sortOrder === "asc" ? "▲" : "▼"}
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.title}</td>
                  <td>
                    <span className="category-badge">{expense.category}</span>
                  </td>
                  <td>${expense.amount.toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  style={{ textAlign: "center", color: "#94a3b8" }}
                >
                  No expenses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTracker;
