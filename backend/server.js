import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { Pool } from 'pg'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})






const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});