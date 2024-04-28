import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const transactionType = transaction.amount < 0 ? 'minus' : 'plus';

  return (
    <li className={transactionType}>
      {transaction.text} 
      <span>{sign}₹{Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction._id)} className='delete-btn'>X</button>
    </li>
  );
};
