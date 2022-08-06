import db from "../db.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


export async function verifyUser(req, res, next){
    const { email } = req.body
    try {
        const existinUser = await db.query(`SELECT * FROM users WHERE email = $1`, [email])
        if (existinUser.rowCount === 1) {
            return res.sendStatus(409)
        }
        next()
    } catch (err) {
        console.log(err);
        res.sendStatus(err);
    }
}

export async function existingUser(req, res, next){
    const { email } = req.body
    try {
        const existinUser = await db.query(`SELECT * FROM users WHERE email = $1`, [email])
        if (existinUser.rowCount === 0) {
            return res.sendStatus(401)
        }
        res.locals.existingUser = existinUser.rows[0];
        next();
    } catch (err) {
        console.log(err);
        res.sendStatus(err);
    }
}