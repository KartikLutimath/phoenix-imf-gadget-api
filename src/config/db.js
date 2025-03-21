import pkg from "pg";
import dotenv from "dotenv";
const { Client } = pkg;

const client = new Client({
  user: process.env.DB_USER || "kartik",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "imf_gadgets_db",
  password: "Kartik@2003",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432, // Ensure port is a number
});

client
  .connect()
  .then(() => console.log("📡 Connected to PostgreSQL database"))
  .catch((err) => console.error("❌ Database connection error:", err.stack));

export default client;