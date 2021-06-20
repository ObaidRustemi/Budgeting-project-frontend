import Transaction from "./Transaction";
import { useState } from "react";
import "./transactions.css";

const Transactions = ({ transactions,acctTotal, calculateTotal }) => {
  let acctBalance = acctTotal;

  return (
    <div className="transactions-container">
      <h1>
        Bank Account Total: ${Number(acctBalance).toFixed(2).toLocaleString()}
      </h1>
      <ul>
        {transactions.map((transaction, index) => {
          return <Transaction {...transaction} index={index} />;
        })}
      </ul>
  
    </div>
  );
};

export default Transactions;
