const ExpenseTotalBalance = ({ totalExpense }) => {
  return (
    <div className="total-balance-card">
      <span className="total-label">Total Expenses</span>
      <span className="total-amount">₹{totalExpense}</span>
    </div>
  );
};

export default ExpenseTotalBalance;
