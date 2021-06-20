import { Link } from "react-router-dom"
import { useEffect } from "react"

const Transaction = ({index,date,name,amount,from,acctTotal,setAcctTotal}) => {
    
    
    

    useEffect(() => {
        setAcctTotal(acctTotal-amount)
    },[])
    return (
        <div>
            <li key={index}>
                
                {date} <Link to={`/transactions/${index}`}>{name}</Link> ${amount} Vendor: {from}
            </li>
        </div>
    )
}

export default Transaction