import classes from "./CartItem.module.css";
function CartItem(props) {
  const price = `$ ${props.price}`;
  const addItem = () => {
    props.onAdd(props.item);
  };
  const removeItem = () => {
    props.onRemove(props.id);
  };
  return (
    <div className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.amtqn}>
          <p className={classes.price}>{price}</p>
          <p className={classes.quantity}>x {props.quantity}</p>
        </div>
      </div>
      <div className={classes.cartButon}>
        <button onClick={removeItem}>-</button>
        <button onClick={addItem}>+</button>
      </div>
    </div>
  );
}
export default CartItem;
