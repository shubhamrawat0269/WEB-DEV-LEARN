const ExpenseTable = ({
  categories,
  toggleSort,
  filteredExpenses,
  sortOrder,
  categoryFilter,
  setCategoryFilter,
}) => {
  return (
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
