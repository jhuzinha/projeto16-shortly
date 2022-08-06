import userRepository from '../repository/userRepository.js';

export async function verifyUser(req, res, next){
    const { email } = req.body;
    try {
        const existinUser = await userRepository.verifyUser(email);
        if (existinUser.rowCount === 1) {
            return res.sendStatus(409)
        }
        next()
    } catch (err) {
        console.log(err);
        res.sendStatus(err);
    }
}

export async function existingUser(req, res, next){
    const { email } = req.body;
    try {
        const existinUser = await userRepository.verifyUser(email);
        if (existinUser.rowCount === 0) {
            return res.sendStatus(401)
        }
        res.locals.existingUser = existinUser.rows[0];
        next();
    } catch (err) {
        console.log(err);
        res.sendStatus(err);
    }
}