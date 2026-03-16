import express from 'express'
import cors from 'cors'
import { connectDB } from './db/connectDB.js'
import { db } from './db/connectDB.js'
import { ObjectId } from 'mongodb'
import { typeChecking } from './utils/typeChecking.js'

const app = express()

app.use(cors())
app.use(express.json())
await connectDB()

app.get('/api/launchers', async (req, res) => {
    const launchers = await db.collection('launchers').find().toArray()
    res.status(200).json(launchers)
})

app.get('/api/launchers/:id', async (req, res) => {
    const { id } = req.params
    if (id.length != 24) {
        return res.status(400).json({ message: 'invalid id' })
    }
    const launcher = await db.collection('launchers').findOne({ _id: new ObjectId(id) })
    if (!launcher) {
        return res.status(404).json({ message: 'launcher not found' })
    }
    res.status(200).json(launcher)
})

app.post('/api/launchers', async (req, res) => {
    if (req.body) {        
        console.log(req.body);
        
        if (typeChecking(req.body)) {
            const { name, rocketType, latitude, longitude, city } = req.body
            const newLauncher = await db.collection('launchers').insertOne({
                name,
                rocketType,
                latitude,
                longitude,
                city
            })
            return res.status(200).json({ id: newLauncher.insertedId })
        }
    }
    return res.status(400).json({ message: "invalid files" })
})

app.delete('/api/launchers/:id', async (req, res) => {
    const { id } = req.params
    if (id.length != 24) {
        return res.status(400).json({ message: 'invalid id' })

    }
    const deleted = await db.collection('launchers').findOneAndDelete({ _id: new ObjectId(id) })
    if (deleted.deletedCount <= 0) {
        return res.status(404).json({ message: 'launcher not found' })
    }
    return res.status(200).json({ deleted: deleted })
})

app.put('/api/launchers/:id', async (req, res) => {
    const { id } = req.params
    if (id.length != 24) {
        return res.status(400).json({ message: 'invalid id' })

    }
    if (req.body) {
        if (typeChecking(req.body)) {
            const { name, rocketType, latitude, longitude, city } = req.body
            const launcher = await db.collection('launchers').findOne({ _id: new ObjectId(id) })
            if (!launcher) {
                return res.status(404).json({ message: 'launcher not found' })
            }
            await db.collection('launchers').updateOne(
                { _id: new ObjectId(id) },
                {
                    $set: {
                        name,
                        rocketType,
                        latitude,
                        longitude,
                        city
                    }
                }
            )
            return res.status(200).json({ message: `launcher '${id}' updeted.` })
        }
    }
    return res.status(400).json({ message: "invalid files" })
})

app.listen(3030, () => {
    console.log('server runing...');
})