import bcrypt from 'bcrypt';
import connection from '../database.js';

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