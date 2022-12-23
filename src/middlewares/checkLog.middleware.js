import connection from "../database/db.js";
import { signInSchema, signUpSchema } from "../models/model.js";
import bcrypt from 'bcrypt';

export async function checkSignUp(req, res, next) {

    const user = req.body;
    const { email, password, confirmPassword } = req.body;

    const validation = signUpSchema.validate(user, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    if (password !== confirmPassword) {
        return res.sendStatus(400);
    }

    const checkUser = await connection.query(
        'SELECT email FROM users WHERE email = $1;',
        [email]
    );

    if (checkUser.rowCount) {
        return res.sendStatus(409);
    }

    next();

}

export async function checkSignIn(req, res, next) {

    const user = req.body;
    const { email, password } = req.body;

    const validation = signInSchema.validate(user, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    try {

        const findUser = await connection.query(
            'SELECT * FROM users WHERE email = $1;',
            [email]
        );

        if (!findUser.rowCount || !bcrypt.compareSync(password, findUser.rows[0].password)) {
            return res.sendStatus(401);
        }

        res.locals.user = findUser.rows[0];

    } catch (error) {

        return res.sendStatus(500);

    }

    next();

}