/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

const Credits = (props) => {
  let creditsView = () => {
    const credits = props.credits;
    return credits.map((credit) => {
      let date = credit.date.slice(0, 10);
      return (
        <li key={credit.id}>
          {credit.amount} {credit.description} {date}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Credits</h1>

      {creditsView()}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const description = e.target.description.value;
          const amount = Number(parseFloat(e.target.amount.value).toFixed(2));
          const date = new Date().toISOString();

          props.addCredit({
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
        <button type="submit">Add Credit</button>
      </form>
      <br />
      <AccountBalance accountBalance={props.balance} />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Credits;
