import Jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import db from '../db.js'


export async function signIn(req, res){
    
}

export async function signUp(req, res){
    const { name, email, password, confirmPassword } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);
    try {
        await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, passwordHash])
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

