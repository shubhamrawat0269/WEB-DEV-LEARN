const ExpenseTable = ({ sortOrder, expenses }) => {
  return (
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
              <td colSpan="3" style={{ textAlign: "center", color: "#94a3b8" }}>
                No expenses found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
