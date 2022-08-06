import urlRepository from '../repository/urlRepository.js';
import { nanoid } from 'nanoid';

export async function createShortUrl(req, res) {
    const { url } = req.body;
    const id = res.locals.id
    const shortUrl = nanoid(7)
    try {
        await urlRepository.postUrlDB(id, url, shortUrl);
        res.status(201).send({ shortUrl })
    } catch (err) {
        console.log(err)
        res.sendStatus(500);
    }
}


export async function getUrlById(req, res) {
    const { id } = req.params;
    try {
        const url = await urlRepository.searchIdUrl(id)
        if (url.rowCount === 0 ){
            return res.sendStatus(404)
        }
        res.status(200).send( ...url.rows )
    } catch (err) {
        res.sendStatus(500)
    }
}

export async function openShortUrl(req, res) {
    const { shortUrl } = req.params;
    try {
        const { rows: url } = await urlRepository.searchShortUrl(shortUrl);
        if (url.length === 0){
            return res.sendStatus(404)
        }
        await urlRepository.updateVisitCount(shortUrl);
        res.redirect(url[0].url);
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function deleteUrl(req, res){
    const { id } = req.params;
    try {
        await urlRepository.deleteUrl(id);
        res.sendStatus(204)
    }catch(err) {
        res.sendStatus(500)
    }
}