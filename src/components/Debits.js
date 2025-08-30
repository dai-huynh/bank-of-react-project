/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

const Debits = (props) => {
  // Create the list of Debit items
  let debitsView = () => {
    const debits = props.debits;
    return debits.map((debit) => {
      // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = debit.date.slice(0, 10);
      return (
        <li key={debit.id}>
          {debit.amount} {debit.description} {date}
        </li>
      );
    });
  };

  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>

      {debitsView()}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const description = e.target.description.value;
          const amount = Number(parseFloat(e.target.amount.value).toFixed(2));
          const date = new Date().toISOString();

          props.addDebit({
            id: Date.now(),
            description,
            amount,
            date,
          });

          e.target.reset();
        }}
      >
        <input
          type="text"
          name="description"
          placeholder="description"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="amount"
          min={0.01}
          step={0.01}
          required
        />
        <button type="submit">Add Debit</button>
      </form>
      <br />
      <AccountBalance accountBalance={props.balance} />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Debits;
