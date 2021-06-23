import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Transactions from "./components/Transactions";
import "./App.css";
import { apiURL } from "./util/apiURL";
import NavBar from "./components/NavBar";
import NewTransactionForm from "./components/NewTransactionForm";
import TransactionDetails from "./components/TransactionDetails";
import EditTransaction from "./components/EditTransaction";

const API = apiURL();
function App() {
  const [transactions, setTransactions] = useState([]);
  let [acctTotal, setAcctTotal] = useState();

  const calculateTotal = () => {
    let newTotal = transactions.reduce((acc, currEl) => {
      return acc + Number(currEl.amount);
    }, 0);
    setAcctTotal(newTotal);
  };

  const fetchTransactions = async () => {
    try {
      let res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTransaction = async (newTransaction) => {
    try {
      let res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactions((prevTransactions) => [...prevTransactions, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTransaction = async (updatedTransaction, index) => {
    try {
      await axios.put(`${API}/transactions/${index}`, updatedTransaction);
      const newTransactions = [...transactions];
      newTransactions[index] = updatedTransaction;
      setTransactions(newTransactions);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTransaction = async (index) => {
    try {
      await axios.delete(`${API}/transactions/${index}`);
      const prevState = [...transactions];
      prevState.splice(index, 1);
      setTransactions(prevState);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [transactions]);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={"/"}>
            <h1>Welcome to OBI-Wan's Budget App!</h1>
          </Route>
          <Route path={"/transactions/new"}>
            <NewTransactionForm addTransaction={addTransaction} />
          </Route>
          <Route exact path={"/transactions/:index"}>
            <TransactionDetails deleteTransaction={deleteTransaction} />
          </Route>
          <Route exact path={"/transactions/:index/edit"}>
            <EditTransaction updateTransaction={updateTransaction} />
          </Route>
          <Route path={"/transactions"}>
            <Transactions acctTotal={acctTotal} transactions={transactions} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
