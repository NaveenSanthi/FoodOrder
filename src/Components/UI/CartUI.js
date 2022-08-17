import classes from "./CartUI.module.css";
function CartUI(props) {
  return <div className={classes.cart}>{props.children}</div>;
}
export default CartUI;
