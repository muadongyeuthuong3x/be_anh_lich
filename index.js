const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT


module.exports = async (req, res) => {
    try {
        await connectDB();
        app(req, res);
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).send("Internal Server Error");
    }
};
