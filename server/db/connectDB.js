import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config()

const uri = process.env.URI
const client = new MongoClient(uri)
export let db
export async function connectDB() {
    if (db) return db
    try {
        await client.connect()
        console.log('Connected to MongoDB');
        db = client.db('launchersDB')
        // console.log(db.databaseName);
        
    } catch (error) {
        console.error('Connection error:', error);
    }
}