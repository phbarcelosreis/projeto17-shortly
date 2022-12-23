export async function checkUrlPost(req, res, next) {

    const { authorization } = req.headers;
    const { url } = req.body

    if (!authorization) {
        return res.sendStatus(401)
    }

    const confirmToken = auth.split(' ');

    if (confirmToken.length !== 2) {
        return res.status(401).send({ message: 'Invalid token!' });
    }

    if (!url) {
        return res.sendStatus(422)
    }

    next()

}

export async function checkExistUrlID(req, res, next) {

    const { id } = req.params;

    try {

        const urlExist = await connection.query(
            'SELECT * FROM urls WHERE id = $1;',
            [id]
        );

        if (!id){

            return res.sendStatus(422);
    
        } 

        if (!urlExist.rowCount) {
            return res.sendStatus(404);
        }

        res.url = urlExist.rows[0];

        next();

    } catch (err) {

        res.sendStatus(500);

    }


}