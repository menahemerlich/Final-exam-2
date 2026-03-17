import express from 'express'
import { userTypes } from '../utils/typeChecking.js'
import { db } from '../db/connectDB.js'
import { ObjectId } from 'mongodb'

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

registerRoute.get('/', async(req, res)=>{
    const users = await db.collection('users').find().toArray()
    res.status(200).json(users)
})

registerRoute.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    if (id.length != 24) {
        return res.status(400).json({ message: 'invalid id' })

    }
    const deleted = await db.collection('users').findOneAndDelete({ _id: new ObjectId(id) })
    if (deleted.deletedCount <= 0) {
        return res.status(404).json({ message: 'launcher not found' })
    }
    return res.status(200).json({ deleted: deleted })
})


registerRoute.put('/update/:id', async (req, res) => {    
    const { id } = req.params
    if (id.length != 24) {
        return res.status(400).json({ message: 'invalid id' })
    }
    if (req.body) {
        if (userTypes(req.body)) {            
            const { userName, password, email, userType } = req.body
            const launcher = await db.collection('users').findOne({ _id: new ObjectId(id) })
            if (!launcher) {
                return res.status(404).json({ message: 'launcher not found' })
            }
            await db.collection('users').updateOne(
                { _id: new ObjectId(id) },
                {
                    $set: {
                        userName,
                        password,
                        email,
                        userType
                    }
                }
            )
            return res.status(200).json({ message: `launcher '${id}' updeted.` })
        }
    }
    return res.status(400).json({ message: "invalid files" })
})
