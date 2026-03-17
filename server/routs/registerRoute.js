import express from 'express'

export const registerRoute = express.Router()

// registerRoute.post('/create', async (req, res) => {
//     if (req.body && typeChecking(req.body)) {
//             const { name, rocketType, latitude, longitude, city } = req.body
//             const newLauncher = await db.collection('launchers').insertOne({
//                 name,
//                 rocketType,
//                 latitude,
//                 longitude,
//                 city
//             })
//             return res.status(200).json({ id: newLauncher.insertedId })
        
//     }
//     return res.status(400).json({ message: "invalid files" })
// })