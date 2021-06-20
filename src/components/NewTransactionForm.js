import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./newTransactionForm.css"

const NewTransactionForm = ({ addTransaction }) => {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: ""
  });

  const history = useHistory()

  const handleInputChange = (e) => {
  setTransaction({...transaction, [e.target.id]: e.target.value})    
  }

  const handleSubmit = (e) => {
   e.preventDefault()
   addTransaction(transaction)
   history.push("/transactions")

  }
  const { date, name, amount, from } = transaction;
  return (
    <div>
      <h3>New Transaction</h3>
      <form className="form" onSubmit={handleSubmit}> 
        <label className="input-label" htmlFor="date">Date</label>
        <input className="input-field" onChange={handleInputChange} type="date" id="date" value={date} placeholder="date" />
        <label className="input-label" htmlFor="name">Name</label>
        <input className="input-field" onChange={handleInputChange} type="text" placeholder="name" id="name" value={name} />
        <label className="input-label" htmlFor="name">Amount</label>
        <input className="input-field" onChange={handleInputChange} type="number" placeholder="amount" id="amount" value={amount} />
        <label className="input-label" htmlFor="name">From</label>
        <input className="input-field" onChange={handleInputChange} type="text" placeholder="from" id="from" value={from} />
        <button type="submit">CREATE NEW ITEM</button>
      </form>
    </div>
  );
};

export default NewTransactionForm;
