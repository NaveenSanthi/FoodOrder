import Input from "../../UI/Input";
import classes from "./MealsForm.module.css";
import React, { useRef } from "react";
function MealsForm(props) {
  const quantity = useRef();
  function onSubmitHandler(event) {
    event.preventDefault();
    const enteredAmount = quantity.current.value;
    const enteredAmountNumber = +enteredAmount;
    props.onAmountSubmit(enteredAmountNumber);
  }

  return (
    <form className={classes.MealsForm} onSubmit={onSubmitHandler}>
      <Input
        ref={quantity}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.addButton}>+ Add</button>
    </form>
  );
}
export default MealsForm;
