import urlRepository from '../repository/urlRepository.js';

export async function verifyUserUrl(req, res, next){
    const { url } = req.body;
    const id = res.locals.id;
    const verifyUrl = await urlRepository.searchUrlbyIdUser(id, url)
    if (verifyUrl.rowCount === 1){
        return res.sendStatus(409)
    }
    next()
}