import { nanoid } from "nanoid"
import connection from "../database/db";

export async function shortUrl(req, res) {

    const { url } = req.body

    try {

        const shortUrl = nanoid(12)

        await connection.query(`INSERT INTO urls (url, "shortUrl") VALUES ($1,$2)`,
            [url, shortUrl]);

        res.status(201).send(shortUrl);

    } catch (err) {

        console.log(err);
        res.sendStatus(500);

    }
}

export async function getUrlID(req, res){

    return res.status(200).send(res.url);

}
