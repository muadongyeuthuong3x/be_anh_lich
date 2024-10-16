const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Định nghĩa router
app.use("/api", router);

// Xuất hàm serverless
module.exports = async (req, res) => {
    try {
        // Kết nối đến cơ sở dữ liệu
        await connectDB();
        console.log("Database connected");
        
        // Gọi middleware Express
        return app(req, res);
    } catch (error) {
        console.error("Database connection error:", error);
        return res.status(500).send("Internal Server Error");
    }
};
