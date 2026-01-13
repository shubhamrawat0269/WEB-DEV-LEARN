import { useState } from "react";

const ExpenseTracker = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  function handleSubmitForm(e){
    e.preventDefault();

    if(title && category && amount){
      const expense = {title, category, amount};
      setExpenses((prevState) => [...prevState, expense]);
      setTotalExpense((prevState) => Number(prevState) + Number(amount));
      setTitle('');
      setCategory('');
      setAmount(0);
    }
  }

  return (
    <div className="expense-container">
      <h1 className="expense-title">Expense Tracker</h1>

      {/* Input Section */}
      <form className="expense-form" onSubmit={handleSubmitForm}>
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
      </form>

      {/* Table Section */}
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select id="category">
                <option value="" hidden>Select Category</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
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
