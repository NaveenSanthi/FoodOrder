import React from "react";
import MealsSumarry from "./MealsSumarry";
import AvailableMeals from "./AvailableMeals";
function Meals() {
  return (
    <React.Fragment>
      <MealsSumarry />
      <AvailableMeals />
    </React.Fragment>
  );
}
export default Meals;
