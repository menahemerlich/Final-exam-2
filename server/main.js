import express from 'express'
import cors from 'cors'
import { connectDB } from './db/connectDB.js'
import { launchersRoute } from './routs/launchersRpute.js'
import { authRoute } from './routs/authRoute.js'

const app = express()

app.use(cors())
app.use(express.json())
await connectDB()

app.use('/api/launchers', launchersRoute)
app.use('/api/auth', authRoute)

app.listen(3030, () => {
    console.log('server runing...');
})