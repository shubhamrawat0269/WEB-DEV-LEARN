import { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseHeader from "./ExpenseHeader";
import ExpenseTable from "./ExpenseTable";
import ExpenseTotalBalance from "./ExpenseTotalBalance";
import { useFilter } from "../hooks/useFilter";

const categories = [
  "Food",
  "Entertainment",
  "Utilities",
  "Health",
  "Technology",
  "Travel",
  "Education",
];

const ExpenseTracker = () => {
  const sortOrder = "asc";
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses"))
      ? JSON.parse(localStorage.getItem("expenses"))
      : [],
  );
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: 0,
  });
  const [errors, setErrors] = useState({});
  const [expenseUpdatedRowId, setExpenseUpdatedRowId] = useState("");

  const inputValidConfig = {
    title: [{ required: true, message: "Title field is required" }],
    category: [{ required: true, message: "Category field is required" }],
    amount: [{ required: true, message: "Amount field is required" }],
  };

  const [filterData, setQuery] = useFilter(expenses, (data) => data.category);
  const totalExpenseAmount = filterData.reduce(
    (acc, curr) => Number(acc) + Number(curr.amount),
    0,
  );

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setExpense((preState) => ({
      ...preState,
      [id]: value,
    }));

    setErrors({});
  };

  const validateInput = (data) => {
    const errorData = {};
    Object.entries(data).forEach(([key, value]) => {
      inputValidConfig[key].forEach((rule) => {
        if (rule.required && !value) errorData[key] = rule.message;
      });
    });

    // console.log(errorData);
    setErrors(errorData);
    return errorData;
  };

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

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

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
