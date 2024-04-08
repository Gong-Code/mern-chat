import express, { json } from 'express'
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT)
    connectToMongoDB()
})
