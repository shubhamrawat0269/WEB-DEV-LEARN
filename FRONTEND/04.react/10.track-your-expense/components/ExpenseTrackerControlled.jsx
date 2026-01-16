import { useState } from "react";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import ExpenseTrackerTable from "./ExpenseTrackerTable";
import ExpenseTrackerTotal from "./ExpenseTrackerTotal";

const ExpenseTrackerControlled = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
    totalExpense: 0,
    selectedCategory: ''
  })

  function handleSubmitForm(e){
    e.preventDefault();

    if(expense.title && expense.category && expense.amount){
      const expenseDetails = {
        title: expense.title, 
        category: expense.category, 
        amount: expense.amount
      };
      setExpenses((prevState) => [...prevState, expenseDetails]);
      setTotalExpense((prevState) => Number(prevState) + Number(expenseDetails.amount));
      setExpense((preState) => ({
        ...preState,
        title: '',
        category: '',
        amount: '',
      }))
    }
  }

  return (
    <div className="expense-container">
      <h1 className="expense-title">Expense Tracker</h1>

      <ExpenseTrackerForm 
       expense={expense} 
       dispatch={setExpense} 
       dispatchHandler={handleSubmitForm} 
      />

      <ExpenseTrackerTable 
       expenses={expenses}
       selectedCategory={selectedCategory}
       dispatchSelectedCategory={setSelectedCategory}
      />

       <ExpenseTrackerTotal 
        totalExpense={totalExpense}
       />
    </div>
  );
};

export default ExpenseTrackerControlled;
