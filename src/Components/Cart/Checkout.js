import classes from "./Checkout.module.css";
import React, { useRef, useState } from "react";

const Checkout = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const postalReef = useRef();
  const cityReef = useRef();
  const [formValidObj, setformValidObj] = useState({
    nameValid: true,
    streetValid: true,
    postalValid: true,
    cityValid: true,
  });
  const isEmpty = (value) => value.trim() === "";
  const postalIsNotFive = (value) => value.trim().length !== 5;

  const confirmHandler = (event) => {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    const streetValue = streetRef.current.value;
    const postalValue = postalReef.current.value;
    const cityReefValue = cityReef.current.value;

    const nameIsValid = !isEmpty(nameValue);
    const streetIsValid = !isEmpty(streetValue);
    const postalIsValid = !postalIsNotFive(postalValue);
    const cityIsValid = !isEmpty(cityReefValue);
    setformValidObj({
      nameValid: nameIsValid,
      streetValid: streetIsValid,
      postalValid: postalIsValid,
      cityValid: cityIsValid,
    });
    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;
    if (!formIsValid) {
      console.log("not Valid");
      return;
    }
    props.check({
      nameValue,
      streetValue,
      postalValue,
      cityReefValue,
    });
  };
  const nameClasses = `${classes.control} ${
    formValidObj.nameValid ? "" : classes.invalid
  }`;
  const streetClasses = `${classes.control} ${
    formValidObj.streetValid ? "" : classes.invalid
  }`;
  const postalClasses = `${classes.control} ${
    formValidObj.postalValid ? "" : classes.invalid
  }`;
  const cityClasses = `${classes.control} ${
    formValidObj.cityValid ? "" : classes.invalid
  }`;

  return (
    <form className={nameClasses} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formValidObj.nameValid && (
          <p className={classes.error}>Name should not be Empty</p>
        )}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formValidObj.streetValid && (
          <p className={classes.error}>Name should not be Empty</p>
        )}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalReef} />
        {!formValidObj.postalValid && (
          <p className={classes.error}>Postal Code Must contain 5 Digits</p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityReef} />
        {!formValidObj.cityValid && (
          <p className={classes.error}>Name should not be Empty</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
