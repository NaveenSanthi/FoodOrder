import "./App.css";
import Header from "./Components/Layout/Header";
import React, { useState, useReducer } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartContext from "./Store/Cart-context";

const defaultState = {
  item: [],
  totalAmount: 0,
};
function cartAction(state, action) {
  if (action.title === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartIntemIndex = state.item.findIndex(
      (itm) => itm.id === action.item.id
    );
    const existingCartItem = state.item[existingCartIntemIndex];
    let updatedItems;
    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[existingCartIntemIndex] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.title === "CLEAR") {
    return defaultState;
  }
  if (action.title === "REMOVE") {
    const index = state.item.findIndex((itm) => itm.id === action.id);
    const existingItem = state.item[index];
    let updatedItems;
    let price;
    if (existingItem) {
      price = state.totalAmount - existingItem.price;
      if (existingItem.amount > 1) {
        const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.item];
        updatedItems[index] = updateItem;
      } else {
        updatedItems = [...state.item];
        updatedItems.splice(index, 1);
      }
    }
    return {
      item: updatedItems,
      totalAmount: price,
    };
  }
  return defaultState;
}
function App() {
  const [CartIsShown, setCartShown] = useState(false);
  const [CartState, dispatchCartState] = useReducer(cartAction, defaultState);
  function addCart() {
    setCartShown(true);
  }
  function removeCart() {
    setCartShown(null);
  }
  const addItemToCartHandler = (item) => {
    dispatchCartState({ title: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ title: "REMOVE", id: id });
  };
  const clearCartItems = () => {
    dispatchCartState({ title: "CLEAR" });
  };
  return (
    <CartContext.Provider
      value={{
        items: CartState.item,
        totalAmount: CartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartItems,
      }}
    >
      {CartIsShown && <Cart removeCart={removeCart} />}
      <Header addCart={addCart} />
      <main>
        <Meals />
      </main>
    </CartContext.Provider>
  );
}

export default App;
