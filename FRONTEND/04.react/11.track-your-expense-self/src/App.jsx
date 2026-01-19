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

const filteredExpenses = [];

function App() {
  return (
    <section className="expense-tracker-container">
      {/* section header */}
      <header className="header-section">
        <h1 className="title">Expense Tracker</h1>
      </header>

      {/* expense total balance */}
      <div className="total-balance-card">
        <span className="total-label">Total Expenses</span>
        <span className="total-amount">₹{`200`}</span>
      </div>

      {/* Expense Form  */}

      <main className="expense-form-container">
        <h2 className="form-title">Add New Expense</h2>
        <form className="expense-form">
          <Input
            id={`title`}
            type="text"
            title={`Title`}
            error={`title is required`}
            placeholder="e.g. Netflix Subscription"
          />

          <SelectBox
            id={`category`}
            categories={categories}
            title={`Title`}
            error={"Category is required"}
          />

          <Input
            id={`amount`}
            type="number"
            title={`Amount`}
            error={`Amount is required`}
            placeholder="0.00"
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
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.title}</td>
                  <td>
                    <span className="category-badge">{expense.category}</span>
                  </td>
                  <td>₹{expense.amount.toFixed(2)}</td>
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
