import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import db from '../db.js'


export async function signIn(req, res){
    const { password } = req.body;
    const existinUser = res.locals.existingUser;
    const databasePassword = existinUser.password;
    const databaseId = existinUser.id;
    if (existinUser && bcrypt.compareSync(password, databasePassword)) {
        const token = jwt.sign({ id: databaseId }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
        return res.send(token).status(200);
    } else {
        res.status(400).send("Invalid email or password");
    }
}

export async function signUp(req, res){
    const { name, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);
    try {
        await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, passwordHash])
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

