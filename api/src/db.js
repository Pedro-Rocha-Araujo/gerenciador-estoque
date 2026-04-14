import mysql2 from "mysql2"
import "dotenv/config"

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.SENHA_SQL,
  database: "banco-loja"
})

export default db