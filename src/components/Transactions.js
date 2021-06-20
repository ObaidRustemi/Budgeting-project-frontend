import Transaction from "./Transaction"
import { useState} from "react";
import "./transactions.css"


const Transactions = ({transactions}) => {
    const [acctTotal, setAcctTotal] = useState(1200.78);

    let acctBalance = acctTotal
    // try a reduce method here so you can update total without sideeffects of map
    return (
        <div className="transactions-container">
            <h1>Bank Account Total: ${Number(acctBalance).toFixed(2).toLocaleString()}</h1>
            <ul>
                {transactions.map((transaction, index)=> { 
                    return <Transaction setAcctTotal={setAcctTotal} acctTotal={acctTotal} {...transaction} index={index}/>
                })}
            </ul>
        </div>
    )
}

export default Transactions