import "./BookItemForm.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const BookItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const entereredAmount = amountInputRef.current.value;
    const entereredAmountNumber = +entereredAmount;

    if (
      entereredAmount.trim().length === 0 ||
      entereredAmountNumber < 1 ||
      entereredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(entereredAmountNumber);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default BookItemForm;
