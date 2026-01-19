import { useState } from "react";
import Input from "./components/Input";
import SelectBox from "./components/SelectBox";

const categories = [
  "Food",
  "Entertainment",
  "Utilities",
  "Health",
  "Technology",
  "Travel",
  "Education",
];

const sortOrder = "asc";
const totalExpense = 200;

function App() {
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

    setExpenses((preState) => ([...preState, expense]));
    setExpense({
      title: "",
      category: "",
      amount: 0,
    });
  };

  return (
    <section className="expense-tracker-container">
      {/* section header */}
      <header className="header-section">
        <h1 className="title">Expense Tracker</h1>
      </header>

      {/* expense total balance */}
      <div className="total-balance-card">
        <span className="total-label">Total Expenses</span>
        <span className="total-amount">₹{totalExpense}</span>
      </div>

      {/* Expense Form  */}

      <main className="expense-form-container">
        <h2 className="form-title">Add New Expense</h2>
        <form className="expense-form" onSubmit={handleSubmit}>
          <Input
            id={`title`}
            type="text"
            title={`Title`}
            value={expense.title}
            error={`title is required`}
            onChange={handleInputChange}
            placeholder="e.g. Netflix Subscription"
          />

          <SelectBox
            id={`category`}
            title={`Title`}
            value={expense.category}
            onChange={handleInputChange}
            categories={categories}
            error={"Category is required"}
          />

          <Input
            id={`amount`}
            type="number"
            title={`Amount`}
            placeholder="0.00"
            value={expense.amount}
            error={`Amount is required`}
            onChange={handleInputChange}
          />
          <button type="submit" className="add-btn">
            Add Expense
          </button>
        </form>
      </main>

      {/* Expense Table */}

      <div className="expense-table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>
                <div className="header-control">Category</div>
              </th>
              <th>
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
            {expenses.length > 0 ? (
              expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.title}</td>
                  <td>
                    <span className="category-badge">{expense.category}</span>
                  </td>
                  <td>₹{expense.amount}</td>
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
    </section>
  );
}

export default App;
