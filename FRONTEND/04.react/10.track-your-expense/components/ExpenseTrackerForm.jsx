const ExpenseTrackerForm = ({ expense, dispatch, dispatchHandler }) => {
  return (
    <form className="expense-form" onSubmit={dispatchHandler}>
        <input
          type="text"
          placeholder="Expense Title"
          value={expense.title}
          onChange={(e) => dispatch((preState) => ({...preState, title: e.target.value}))}
        />
        <input
          type="text"
          placeholder="Category"
          value={expense.category}
          onChange={(e) => dispatch((preState) => ({...preState, category: e.target.value}))}
        />
        <input
          type="number"
          placeholder="Amount"
          value={expense.amount}
          onChange={(e) => dispatch((preState) => ({...preState, amount: e.target.value}))}
        />

        <button type="submit" className="add-btn">Add</button>
    </form>
  )
}

export default ExpenseTrackerForm