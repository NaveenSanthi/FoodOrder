import React from "react";
import classes from "./Header.module.css";
import mealsImg from "../../assest/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton addCart={props.addCart} />
      </header>
      <div className={classes["meals-img"]}>
        <img src={mealsImg} alt="meals" />
      </div>
    </React.Fragment>
  );
}
export default Header;
