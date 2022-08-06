import db from '../db.js'

async function postUrlDB(id, url, shortUrl){
    return await db.query(`INSERT INTO links ("ownerId", url, "shortUrl") VALUES ($1, $2, $3)`, [id, url, shortUrl])
}

async function searchUrlbyIdUser(id, url){
    return await db.query(`SELECT * FROM links WHERE "ownerId" = $1 AND url = $2`, [id, url])
}

async function searchIdUrl(id){
    return await db.query(`SELECT id, "shortUrl", url FROM links WHERE id = $1`, [id])
}

async function searchShortUrl(shortUrl) {
    return await db.query(`SELECT url FROM links WHERE "shortUrl" = $1`, [shortUrl])
}

async function updateVisitCount(shortUrl){
    return await db.query(`UPDATE links SET "visitCount" = "visitCount" + 1 WHERE "shortUrl" = $1`, [shortUrl])
}

async function searchIdAndOwner(id, urlId) {
    return await db.query(`SELECT * FROM links WHERE "ownerId" = $1 and id = $2`, [id, urlId])
}

async function deleteUrl(id) {
    return await db.query(`DELETE FROM links WHERE id = $1`, [id])
}

const urlRepository = {
    postUrlDB,
    searchUrlbyIdUser,
    searchIdUrl,
    searchShortUrl,
    updateVisitCount,
    searchIdAndOwner,
    deleteUrl
}

export default urlRepository;