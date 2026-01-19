const ExpenseForm = ({
  expense,
  categories,
  handleOnChange,
  handleAddExpense,
}) => {
  return (
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
            value={expense.title}
            onChange={handleOnChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="form-select"
            value={expense.category}
            onChange={handleOnChange}
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
            value={expense.amount}
            onChange={handleOnChange}
          />
        </div>

        <button type="submit" className="add-btn">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
