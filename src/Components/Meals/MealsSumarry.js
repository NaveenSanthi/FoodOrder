import classes from "./MealsSumarry.module.css";
function MealsSumarry() {
  return (
    <section className={classes.sumarry}>
      <h2 className={classes.heading}>Delicious Food,Delivered To You</h2>
      <p className={classes.des}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={classes.des}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
}
export default MealsSumarry;
