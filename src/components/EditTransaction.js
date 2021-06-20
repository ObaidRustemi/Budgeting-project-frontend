import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const EditTransaction = ({ updateTransaction }) => {
  let { index } = useParams();
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
  });
  const history = useHistory();
  const handleInputChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${index}`);
      setTransaction(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
      fetchTransactions()
  },[])

  const handleSubmit =  async (e) => {
      e.preventDefault()
      await updateTransaction(transaction, index)
      history.push(`/transactions/${index}`)

  }

  const { date, name, amount, from } = transaction;
  return (
    <div>
      <h3>Edit Transaction</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label className="input-label" htmlFor="date">
          Date
        </label>
        <input
          className="input-field"
          onChange={handleInputChange}
          type="date"
          id="date"
          value={date}
          placeholder="date"
        />
        <label className="input-label" htmlFor="name">
          Name
        </label>
        <input
          className="input-field"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          id="name"
          value={name}
        />
        <label className="input-label" htmlFor="name">
          Amount
        </label>
        <input
          className="input-field"
          onChange={handleInputChange}
          type="number"
          placeholder="amount"
          id="amount"
          value={amount}
        />
        <label className="input-label" htmlFor="name">
          From
        </label>
        <input
          className="input-field"
          onChange={handleInputChange}
          type="text"
          placeholder="from"
          id="from"
          value={from}
        />
        <button type="submit">SUBMIT CHANGES</button>
      </form>
    </div>
  );
};

export default EditTransaction;
