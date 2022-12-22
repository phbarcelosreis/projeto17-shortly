import { signInSchema, signUpSchema } from "../models/model";

export default async function checkSignUp(req, res, next) {

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

export default function checkSignIn(req, res, next) {

    const user = req.body

    const validation = signInSchema.validate(user, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    next();

}