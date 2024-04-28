import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  // Handle the case when transactions is undefined
  const amounts = transactions ? transactions.map(transaction => transaction.amount) : [];

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter(item => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h3>Income</h3>
        <p className='money plus'>₹{income}</p>
      </div>
      <div>
        <h3>Expenses</h3>
        <p className='money minus'>₹{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
