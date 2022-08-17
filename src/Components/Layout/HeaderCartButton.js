import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import React, { Fragment, useState, useEffect } from "react";
import CartContext from "../../Store/Cart-context";
function HeaderCartButton(props) {
  const ctx = React.useContext(CartContext);
  const [bumpState, setBump] = useState(false);
  console.log(ctx.items);
  const length = ctx.items.reduce((acc, itm) => {
    return acc + itm.amount;
  }, 0);
  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setBump(true);
    const timer = setTimeout(() => {
      setBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
      console.log("clear");
    };
  }, [ctx.items]);
  const btncls = `${classes.CartButton} ${bumpState ? classes.bump : ""}`;
  return (
    <Fragment>
      <button className={btncls} onClick={props.addCart}>
        <span className={classes.CartIcon}>
          <CartIcon />
        </span>
        <span className={classes.CartText}>Your Cart</span>
        <span className={classes.CartCount}>{length}</span>
      </button>
    </Fragment>
  );
}
export default HeaderCartButton;
