import urlRepository from '../repository/urlRepository.js';
import { customAlphabet } from 'nanoid';

export async function createShortUrl(req, res) {
    const { url } = req.body;
    const id = res.locals.id
    const nanoid = customAlphabet('1234567890abcdef', 7)
    const shortUrl = url.id = nanoid()
    try {
        await urlRepository.postUrlDB(id, url, shortUrl);
        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(500);
    }
 
}