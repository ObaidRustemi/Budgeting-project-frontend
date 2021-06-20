import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Transactions from "./components/Transactions";
import "./App.css";
import { apiURL } from "./util/apiURL";
import NavBar from "./components/NavBar";
import NewTransactionForm from "./components/NewTransactionForm";
import TransactionDetails from "./components/TransactionDetails";

const API = apiURL();
function App() {
  const [transactions, setTransactions] = useState([]);
  const [acctTotal, setAcctTotal] = useState(300987.7867);

  const fetchTransactions = async () => {
    try {
      let res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTransaction = async (newTransaction) => {
    debugger
    try {
let res = await axios.post(`${API}/transactions`, newTransaction)
setTransactions((prevTransactions) => [...prevTransactions, res.data])
    } catch (err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path={"/transactions/new"}>
            <NewTransactionForm addTransaction={addTransaction}/>
          </Route>
          <Route exact path={"/transactions/:index"}>
            <TransactionDetails acctTotal={acctTotal} />
          </Route>
          <Route  path={"/transactions"}>
            <Transactions transactions={transactions} acctTotal={acctTotal} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
