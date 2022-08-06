import db from '../db.js'

async function insertUser(name, email, passwordHash){
    return await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, passwordHash])
}

async function verifyUser(email){
    return await db.query(`SELECT * FROM users WHERE email = $1`, [email])
}


const userRepository = {
	insertUser,
    verifyUser
}

export default userRepository;