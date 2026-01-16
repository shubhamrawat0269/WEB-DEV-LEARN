const ExpenseTrackerTable = ({expenses, selectedCategory, dispatchSelectedCategory}) => {
  return (
    <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>
              {
                expenses.length === 0 ? (
                  <>Category</>
                ) : (
              <select id="category" onChange={(e) => dispatchSelectedCategory(e.target.value)}>
                <option value="" hidden>Select Category</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
                )
              }
            </th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td className="text-center" colSpan="3">
                No Data
              </td>
            </tr>
          ) : (
            expenses
            .filter((item) => item.category.toLowerCase().includes(selectedCategory))
            .map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
  )
}

export default ExpenseTrackerTable