import Jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import db from '../db.js'


export async function signIn(req, res){
    return {

    }
}

export async function signUp(req, res){
    const { name, email, password, confirmPassword } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);
    try {
        await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3, $4)`, [name, email, passwordHash])
        res.status(200).send("User created");
    } catch (error) {
        console.log(error)
        res.sendStatus(422);
    }
}

