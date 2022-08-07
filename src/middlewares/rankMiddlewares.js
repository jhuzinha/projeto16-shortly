import rankRepository from "../repository/rankRepository.js";


export async function verifyUserValid(req, res, next){
    const userId = res.locals.id;
    try {
        const existing = await rankRepository.ExistingUserId(userId)
        if (existing.rowCount === 0) {
            return res.sendStatus(404)
        }
        next();
    } catch(err) {
        res.sendStatus(500)
    }   
}