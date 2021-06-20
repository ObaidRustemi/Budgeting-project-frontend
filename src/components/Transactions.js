import Transaction from "./Transaction"


const Transactions = ({transactions,acctTotal}) => {

    let acctBalance = acctTotal.toFixed(2)
    return (
        <div>
            <h1>Bank Account Total: ${Number(acctBalance).toLocaleString()}</h1>
            <ul>
                {transactions.map((transaction, index)=> {
                    return <Transaction {...transaction} index={index}/>
                })}
            </ul>
        </div>
    )
}

export default Transactions