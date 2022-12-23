import { nanoid } from "nanoid"
import connection from "../database/db";

export async function shortUrl(req, res) {

    try {

        const shortUrl = nanoid(12)

        await connection.query(`INSERT INTO urls ("userId", url, "shortUrl") VALUES ($1,$2,$3)`,
            [userId, url, shortUrl]);

        res.status(201).send(shortUrl);

    } catch (err) {

        console.log(err);
        res.sendStatus(500);

    }
}
