import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
 
export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
 
  const { addTransaction } = useContext(GlobalContext);
 
  const onSubmit = e => {
    e.preventDefault();
 
    const newTransaction = {
      text,
      amount: +amount
    }
 
    addTransaction(newTransaction);
  }
 
  return (
    <>
      <h3>Add a new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a new transaction." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Quantity <br/>
            - A positive quantity counts as income<br/>
            - A negative quantity counts as expense</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter the quantity of your transaction." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
};
