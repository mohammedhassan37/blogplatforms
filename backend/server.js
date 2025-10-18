import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import { Pool } from 'pg';

dotenv.config(); // make sure this is at the very top

const app = express();
app.use(cors());
app.use(express.json());

// -------------------- PostgreSQL pool --------------------
const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD), // ensure it's a string
  port: Number(process.env.DB_PORT),         // ensure it's a number
});

// Optional: test the connection
pool.connect()
  .then(() => console.log("Connected to PostgreSQL successfully"))
  .catch(err => console.error("PostgreSQL connection error:", err));

// -------------------- Serve frontend --------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// -------------------- API routes --------------------
app.get("/api/articles", async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM articles ORDER BY id DESC;`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the articles" });
  }
});

// -------------------- Catch-all for React routes --------------------


// -------------------- Start server --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
