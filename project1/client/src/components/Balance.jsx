import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Check if transactions exist and is an array
  const amounts = transactions ? transactions.map(transaction => transaction.amount) : [];

  // Calculate total only if amounts array is not empty
  const total = amounts.length > 0 ? amounts.reduce((acc, item) => (acc += item), 0).toFixed(2) : "0.00";

  return (
    <>
      <h2>Your Balance</h2>
      <h1>₹{total}</h1>
    </>
  );
};

export default Balance;
