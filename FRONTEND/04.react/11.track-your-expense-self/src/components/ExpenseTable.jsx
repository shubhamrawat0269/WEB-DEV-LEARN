import { useState } from "react";
import ContextMenu from "./ContextMenu";

const ExpenseTable = ({
  setExpense,
  sortOrder,
  expenses,
  setExpenses,
  categories,
  setQuery,
  onSort,
  setExpenseUpdatedRowId,
}) => {
  const [menu, setMenu] = useState(null);
  const [rowId, setRowId] = useState(null);
  const handleContextMenu = (e, id) => {
    e.preventDefault();
    setMenu({ x: e.clientX, y: e.clientY });
    setRowId(id);
  };

  const handleDelete = () => {
    const filteredExpenses = expenses.filter((expense) => expense.id !== rowId);
    setExpenses(filteredExpenses);
  };

  const handleEdit = () => {
    const {title, category, amount} = expenses.find((expense) => expense.id === rowId);
    // console.log(editExpense);
    setExpense({title, category, amount});
    setExpenseUpdatedRowId(rowId);
  };

  return (
    <div className="expense-table-container" onClick={() => setMenu(null)}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th className="table-header">
              <div className="header-control">Category</div>
              <div>
                <select
                  className="form-select"
                  onChange={(e) => setQuery(e.target.value)}
                >
                  <option value="" hidden>
                    Select Category
                  </option>

                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </th>
            <th>
              <div className="header-control">
                Amount
                <span className="sort-icon" onClick={onSort}>
                  {sortOrder === "asc" ? "▲" : "▼"}
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr
                key={expense.id}
                onContextMenu={(e) => handleContextMenu(e, expense.id)}
              >
                <td>{expense.title}</td>
                <td>
                  <span className="category-badge">{expense.category}</span>
                </td>
                <td>₹{expense.amount}</td>
              </tr>
            ))
          ) : (
            <tr key={"no-expense"}>
              <td colSpan="3" style={{ textAlign: "center", color: "#94a3b8" }}>
                No expenses found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {menu && (
        <ContextMenu
          x={menu.x}
          y={menu.y}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default ExpenseTable;
