import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/Cart-context";
import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
function Cart(props) {
  const [checkOutDisplay, setCheckOutDisplay] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [dataSended, setDataSended] = useState(false);
  const ctx = useContext(CartContext);
  const totalAmount = `$ ${ctx.totalAmount}`;
  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };
  const addItemHandler = (item) => {
    const updatedItem = { ...item, amount: 1 };
    ctx.addItem(updatedItem);
  };
  let btnDis = ctx.items.length > 0;
  const ListItem = ctx.items.map((meals) => (
    <CartItem
      item={meals}
      name={meals.Pname}
      price={meals.price}
      key={meals.id}
      id={meals.id}
      quantity={meals.amount}
      onRemove={removeItemHandler.bind(null, meals.id)}
      onAdd={addItemHandler.bind(null, meals)}
    />
  ));
  const orderbtnHandler = () => {
    setCheckOutDisplay(true);
  };
  const buttons = (
    <div className={classes.buttons}>
      <button onClick={props.removeCart}>Close</button>
      {btnDis && <button onClick={orderbtnHandler}>Order</button>}
    </div>
  );

  const checkOutData = (data) => {
    setTimeout(() => {
      setIsSending(true);
      console.log("Sending Data");
      console.log(data);
    }, 3000);
    setTimeout(() => {
      setIsSending(false);
      console.log("Data Sended");
      console.log(data);
      setDataSended(true);
      ctx.clearCart();
    }, 4000);
  };
  const content = (
    <React.Fragment>
      {ListItem}
      <div className={classes.amount}>
        <span>Total Amount : </span>
        <span>{totalAmount}</span>
      </div>
      {checkOutDisplay && (
        <Checkout onCancel={props.removeCart} check={checkOutData} />
      )}
      {!checkOutDisplay && buttons}
    </React.Fragment>
  );
  return (
    <Modal removeCart={props.removeCart}>
      <div className={classes.cartModal}>
        {!isSending && !dataSended && content}
        {isSending && !dataSended && <p> Data Is Sending</p>}
        {!isSending && dataSended && <p> Data Is Sended Successfully</p>}
      </div>
    </Modal>
  );
}
export default Cart;
