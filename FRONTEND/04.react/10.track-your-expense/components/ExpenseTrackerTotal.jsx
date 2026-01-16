const ExpenseTrackerTotal = ({ totalExpense }) => {
  return (
    <div className="total-expense">
      <strong>Total Expense:</strong> ₹{totalExpense}
    </div>
  )
}

export default ExpenseTrackerTotal