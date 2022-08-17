import CartUI from "../UI/CartUI";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";

function AvailableMeals(props) {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const DUMMY_MEALS = [
        {
          id: "m1",
          name: "Susi",
          description: "Finest fish and veggies",
          Price: 16.5,
        },
      ];
      setLoading(false);
      setLoadedData(DUMMY_MEALS);
    }, 90);
  }, []);
  const mealsList = loadedData.map((meal) => (
    <MealItem meals={meal} key={meal.id} id={meal.id}></MealItem>
  ));
  return (
    <section className={classes.mealsList}>
      <CartUI>{isLoading ? <Spinner /> : <ul>{mealsList}</ul>}</CartUI>
    </section>
  );
}
export default AvailableMeals;
