import classes from './meals-grid.module.css'
import MealItem from "@/app/meals/meal-item";

export default function MealGrid({ meals }) {
    return (
        <ul className={classes.meals}>
            {meals.map(meal => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}