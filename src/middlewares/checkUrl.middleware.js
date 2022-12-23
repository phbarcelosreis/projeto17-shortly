export async function checkUrlPost(req, res, next) {


    const auth = req.headers.authorization;

    if (!auth) {
        return res.sendStatus(401)
    }

    const confirmToken = auth.split(' ');

    if (confirmToken.length !== 2) {
        return res.status(401).send({ message: 'Invalid token!' });
    }

    next()

}