import MealsForm from "./MealsForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../Store/Cart-context";
import { useContext } from "react";
function MealItem(props) {
  const Price = `$${props.meals.Price.toFixed(2)}`;
  const ctx = useContext(CartContext);
  const onAmountSubmit = (quantity) => {
    ctx.addItem({
      id: props.meals.id,
      Pname: props.meals.name,
      amount: quantity,
      price: props.meals.Price,
    });
  };
  return (
    <li className={classes.listItem}>
      <div>
        <h3 className={classes.heading}>{props.meals.name}</h3>
        <p className={classes.description}>{props.meals.description}</p>
        <p className={classes.price}>{Price}</p>
      </div>
      <div>
        <MealsForm onAmountSubmit={onAmountSubmit} />
      </div>
    </li>
  );
}
export default MealItem;
