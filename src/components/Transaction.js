import { Link } from "react-router-dom";

const Transaction = ({ index, date, name, amount, from }) => {
  return (
    <li key={index}>
      {date} <Link to={`/transactions/${index}`}>{name}</Link> ${amount} Vendor:{" "}
      {from}
    </li>
  );
};

export default Transaction;
