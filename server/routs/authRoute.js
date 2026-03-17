import express from 'express'
import { registerRoute } from './registerRoute.js'

export const authRoute = express.Router()

authRoute.use('/register', registerRoute)