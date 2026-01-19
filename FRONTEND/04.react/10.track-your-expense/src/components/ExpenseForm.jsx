const ExpenseForm = ({
  errors,
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
          <p className="error-message">{errors.title}</p>
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
          <p className="error-message">{errors.category}</p>
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
          <p className="error-message">{errors.amount}</p>
        </div>

        <button type="submit" className="add-btn">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
