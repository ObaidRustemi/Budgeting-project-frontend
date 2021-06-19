import Transaction from "./Transaction"


const Transactions = ({transactions,acctTotal}) => {
    return (
        <div>
            <h1>Bank Account Total: {acctTotal}</h1>
            <ul>
                {transactions.map((transaction, index)=> {
                    return <Transaction {...transaction} index={index}/>
                })}
            </ul>
        </div>
    )
}

export default Transactions