import express from 'express'
import { userTypes } from '../utils/typeChecking.js'
import { db } from '../db/connectDB.js'

export const registerRoute = express.Router()

registerRoute.post('/create', async (req, res) => {
    if (req.body && userTypes(req.body)) {
            const { userName, password, email, userType } = req.body
            const newUser = await db.collection('users').insertOne({
                userName,
                password,
                email,
                userType
            })
            return res.status(200).json({ id: newUser.insertedId })
        
    }
    return res.status(400).json({ message: "invalid files" })
})