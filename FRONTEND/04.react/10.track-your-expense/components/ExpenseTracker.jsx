import { useState } from "react";

const ExpenseTracker = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  // Static UI data (example)
//   const expenses = [
//     { title: "Groceries", category: "Food", amount: 2500 },
//     { title: "Electricity Bill", category: "Bills", amount: 3200 },
//     { title: "Internet", category: "Utilities", amount: 2400 },
//   ];


  const expenses = [];
  const totalExpense = 8100;

  return (
    <div className="expense-container">
      <h1 className="expense-title">Expense Tracker</h1>

      {/* Input Section */}
      <div className="expense-form">
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="add-btn">Add</button>
      </div>

      {/* Table Section */}
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total */}
      <div className="total-expense">
        <strong>Total Expense:</strong> ₹{totalExpense}
      </div>
    </div>
  );
};

export default ExpenseTracker;
