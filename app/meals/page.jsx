import Link from 'next/link';
import classes from './page.module.css'
import MealGrid from "@/app/meals/meal-grid";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";

async function Meals() {
    const meals = await getMeals();

   return <MealGrid meals={meals}/>

}

export default async function  MealsPage(){

    return <>
        <header className={classes.header}>
            <h1>
                Delicious meals, created {' '}
                <span className={classes.highlight}>by </span>
            </h1>
            <p>Chose your favorite recipe and cook it yourself . It is easy </p>
            <p className={classes.cta}>
                <Link href="/meals/shares">
                    Share your favorite recipe
                </Link>
            </p>
        </header>
        <main>
            <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
                <Meals/>
            </Suspense>
        </main>
    </>
}