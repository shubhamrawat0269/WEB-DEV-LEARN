const TotalBalance = ({totalAmount}) => {
  return (
    <div className="total-balance-card">
      <span className="total-label">Total Expenses</span>
      <span className="total-amount">₹{totalAmount.toFixed(2)}</span>
    </div>
  );
};

export default TotalBalance;
