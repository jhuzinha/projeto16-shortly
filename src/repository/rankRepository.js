import db from '../db.js'

async function AllUserLinks(id){
    return await db.query(`SELECT users.id as id,
    users.name as name,
    COALESCE(SUM ("visitCount"), 0) as "visitCount", 
    json_agg(json_build_object('id', l.id, 'url', l.url, 'shortUrl', l."shortUrl", 'visitCount', l."visitCount")) AS "shortenedUrls"
    FROM users
    LEFT JOIN links l
    ON l."ownerId" = users.id
    WHERE users.id = $1
    GROUP BY users.id`, [id])
}

async function ExistingUserId(id) {
    return await db.query(`SELECT * FROM users WHERE id = $1`, [id])
}

async function rank() {
    return await db.query(`SELECT users.id as id,
    users.name as name,
    COUNT("ownerId") as "linksCount",
    COALESCE(SUM ("visitCount"), 0) as "visitCount"
    FROM users
    LEFT JOIN links l
    ON l."ownerId" = users.id
    GROUP BY users.id
	ORDER BY "visitCount" DESC, "linksCount" DESC`)
}


const rankRepository = {
    AllUserLinks,
    ExistingUserId,
    rank
}

export default rankRepository;