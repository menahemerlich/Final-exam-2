import express from 'express'
import { registerRoute } from './registerRoute.js'
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import { db } from '../db/connectDB.js'

dotenv.config()

export const authRoute = express.Router()

authRoute.use('/register', registerRoute)

authRoute.post('/login', async (req, res) => {
    if (req.body.userName && req.body.password && typeof req.body.userName === 'string' && typeof req.body.password === 'string') {
        const { userName, password } = req.body
        const user = await db.collection("users").findOne({ userName: userName, password: password })    
        if (user) {
            const token = jwt.sign(
                {
                    id: user._id,
                    userName: user.userName,
                    userType: user.userType
                },
                process.env.JWT_SECRET,
                { expiresIn: "2h" }
            )
            await db.collection("users").updateOne({ userName: userName, password: password }, {$set:{lastLogin: new Date().toISOString()}})
            return res.status(200).json({ token, user })
        }
        return res.status(401).json({ message: 'invalid credentials' })
    }
    return res.status(400).json({ message: 'Missing fields' })
})