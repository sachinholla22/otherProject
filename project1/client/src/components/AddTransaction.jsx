import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (text.trim() === '' || amount.trim() === '') {
      // Handle validation error, maybe show an alert or error message
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    // Clear form fields after adding transaction
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter Text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (+) for Income and (-) for Expenses
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter Amount...'
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
