import { categories } from "../utils/dummy-data";
import useAppContext from "../hooks/useAppContext";

import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import ExpenseHeader from "./ExpenseHeader";
import ExpenseTotalBalance from "./ExpenseTotalBalance";

const ExpenseTracker = () => {
  const {
    errors,
    expense,
    setQuery,
    setExpense,
    sortOrder,
    filterData,
    setExpenses,
    handleSubmit,
    handleInputChange,
    totalExpenseAmount,
    expenseUpdatedRowId,
    setExpenseUpdatedRowId,
  } = useAppContext();

  return (
    <section className="expense-tracker-container">
      {/* section header */}
      <ExpenseHeader />
      {/* expense total balance */}
      <ExpenseTotalBalance totalExpense={totalExpenseAmount} />
      {/* Expense Form  */}
      <ExpenseForm
        errors={errors}
        expense={expense}
        categories={categories}
        handleSubmit={handleSubmit}
        expenseUpdatedRowId={expenseUpdatedRowId}
        handleInputChange={handleInputChange}
      />
      {/* Expense Table */}
      <ExpenseTable
        expense={expense}
        setExpense={setExpense}
        expenses={filterData}
        setExpenses={setExpenses}
        sortOrder={sortOrder}
        categories={categories}
        setQuery={setQuery}
        setExpenseUpdatedRowId={setExpenseUpdatedRowId}
      />
    </section>
  );
};

export default ExpenseTracker;
