import { useState } from "react";

import { useFilter } from "../hooks/useFilter";
import { categories } from "../utils/dummy-data";

import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import ExpenseHeader from "./ExpenseHeader";
import ExpenseTotalBalance from "./ExpenseTotalBalance";
import useAppContext from "../hooks/useAppContext";

const ExpenseTracker = () => {
  const {
    sortOrder,
    expenses,
    setExpenses,
    expense,
    setExpense,
    errors,
    validateInput,
    handleInputChange,
  } = useAppContext();

  const [expenseUpdatedRowId, setExpenseUpdatedRowId] = useState("");

  const [filterData, setQuery] = useFilter(expenses, (data) => data.category);
  const totalExpenseAmount = filterData.reduce(
    (acc, curr) => Number(acc) + Number(curr.amount),
    0,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const validInput = validateInput(expense);

    if (expenseUpdatedRowId) {
      setExpenses((preState) => {
        return preState.map((prevExpense) => {
          if (prevExpense.id === expenseUpdatedRowId)
            return { ...expense, id: expenseUpdatedRowId };
          return prevExpense;
        });
      });

      setExpense({
        title: "",
        category: "",
        amount: 0,
      });

      setExpenseUpdatedRowId("");
      return;
    }

    if (Object.keys(validInput).length !== 0) return;
    setExpenses((preState) => [
      ...preState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: 0,
    });
  };

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
