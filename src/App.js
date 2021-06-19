import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Transactions from "./components/Transactions";
import "./App.css";
import { apiURL } from "./util/apiURL";
import NavBar from "./components/NavBar";

const API = apiURL();
function App() {
  const [transactions, setTransactions] = useState([]);
  const [acctTotal, setAcctTotal] = useState(0);

  const fetchTransactions = async () => {
    try {
      let res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransactions()
  },[])

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path={"/transactions"}>
            <Transactions transactions={transactions} acctTotal={acctTotal} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
