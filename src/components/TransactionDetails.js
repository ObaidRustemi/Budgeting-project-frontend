import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import "./transactionDetails.css"
const API = apiURL();

const TransactionDetails = ({deleteTransaction}) => {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let history = useHistory();

  const fetchTransactions = async () => {
    try {
      //   const res = await axios.get(`${API}/transactions/${index}`);
      const res = await axios.get(`${API}/transactions/${index}`);
     
      setTransaction(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = () => {
      deleteTransaction(index)
      history.push('/transactions')
  }

  useEffect(() => {
    fetchTransactions();
    console.log("useEffectUSED");
  }, []);

  return (
    <div>
      <h1>Transaction Details</h1>
      <h3>Date: {transaction.date}</h3>
      <h3>Name: {transaction.name}</h3>
      <h3>Amount: ${transaction.amount}</h3>
      <h3>From: {transaction.from}</h3>
      <Link to={`/transactions`}>
        <button>Back</button>
      </Link>
      <Link to={`/transactions/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete Transaction</button>
    </div>
  );
};

export default TransactionDetails;
