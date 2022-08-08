import urlRepository from '../repository/urlRepository.js';

export async function verifyUserUrl(req, res, next){
    const { url } = req.body;
    const id = res.locals.id;
    try {
        const verifyUrl = await urlRepository.searchUrlbyIdUser(id, url)
        if (verifyUrl.rowCount === 1){
            return res.sendStatus(409)
        }
        next()
    }catch(err) {
        res.sendStatus(500)
    }
}

export async function verifyUrl(req, res, next){
    const { id } = req.params;
    const idUser = res.locals.id;
    try {
        const verifyUrlWithId = await urlRepository.searchIdAndOwner(idUser, id)
        if (verifyUrlWithId.rowCount === 0){
            return res.sendStatus(404)
        }
        next();
    } catch(err) {
        res.sendStatus(500)
    }
}
