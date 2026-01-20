import Input from "./Input";
import SelectBox from "./SelectBox";

const ExpenseForm = ({
  errors,
  expense,
  categories,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <main className="expense-form-container">
      <h2 className="form-title">Add New Expense</h2>
      <form className="expense-form" onSubmit={handleSubmit}>
        <Input
          id="title"
          type="text"
          title="Title"
          value={expense.title}
          error={errors.title}
          onChange={handleInputChange}
          placeholder="e.g. Netflix Subscription"
        />

        <SelectBox
          id="category"
          title="Title"
          value={expense.category}
          onChange={handleInputChange}
          categories={categories}
          error={errors.category}
        />

        <Input
          id="amount"
          type="number"
          title="Amount"
          placeholder="0.00"
          value={expense.amount}
          error={errors.amount}
          onChange={handleInputChange}
        />
        <button type="submit" className="add-btn">
          Add Expense
        </button>
      </form>
    </main>
  );
};

export default ExpenseForm;
