import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.1,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Sonpapdi",
    amount: 33.1,
    date: new Date(2022, 6, 18),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e5",
    title: "Miami",
    amount: 946.67,
    date: new Date(2023, 6, 28),
  },
  {
    id: "e6",
    title: "wifi",
    amount: 24.67,
    date: new Date(2023, 9, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
