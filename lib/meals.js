import slugify from "slugify";
import xss from "xss";
import fs from "fs";
import path from "path";

const sql = require("better-sqlite3");
const db = sql("meals.db");

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
    const slug = slugify(meal.title, { lower: true });
    const instructions = xss(meal.instructions);

    const extension = path.extname(meal.image.name);
    const fileName = `${slug}${extension}`;
    const filePath = path.join("public", "images", fileName);

    const bufferedImage = Buffer.from(await meal.image.arrayBuffer());
    fs.writeFileSync(filePath, bufferedImage);

    db.prepare(
        `INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
         VALUES (
            @title, @summary, @instructions, @creator, @creator_email, @image, @slug
         )`
    ).run({
        title: meal.title,
        summary: meal.summary,
        instructions : meal.instructions,
        creator: meal.creator,
        creator_email: meal.creator_email,
        image: `/images/${fileName}`,
        slug
    });
}
