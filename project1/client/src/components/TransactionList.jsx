import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransaction, loading, error } = useContext(GlobalContext);

  useEffect(() => {
    getTransaction();

    // Add getTransaction to dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTransaction]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
        {transactions && transactions.length > 0 ? (
          transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <p>No transactions available.</p>
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
