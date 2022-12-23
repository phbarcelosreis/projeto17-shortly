import bcrypt from 'bcrypt';
import connection from '../database/db.js';
import dotenv from "dotenv";
dotenv.config();

export default async function signUp(req, res) {

    const { email, name, password } = req.body;

    try {

        const hashPassword = bcrypt.hashSync(password, 12);

        await connection.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3);',
            [name, email, hashPassword]
        );

        res.sendStatus(201);

    } catch (err) {

        res.sendStatus(500);

    }

}

export async function signIn(req, res) {

    const { id } = res.locals.user;

    try {

        const token = jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

        res.status(200).send({ token });

    } catch (err) {

        res.sendStatus(500);

    }
}