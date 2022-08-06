import db from '../db.js'

async function postUrlDB(id, url, shortUrl){
    return await db.query(`INSERT INTO links ("ownerId", url, "shortUrl") VALUES ($1, $2, $3)`, [id, url, shortUrl])
}


const urlRepository = {
    postUrlDB
}

export default urlRepository;