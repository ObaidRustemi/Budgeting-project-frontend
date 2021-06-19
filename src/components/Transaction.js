import { Link } from "react-router-dom"

const Transaction = ({index,date,name,amount}) => {
    return (
        <div>
            <li key={index}>
                
                {date} <Link to={`/transactions/${index}`}>{name}</Link> {amount}
            </li>
        </div>
    )
}

export default Transaction