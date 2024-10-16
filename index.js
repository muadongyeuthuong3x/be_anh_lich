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

app.use("/api", router);

// Xuất hàm serverless
module.exports = async (req, res) => {
    // Kết nối đến cơ sở dữ liệu mỗi lần hàm được gọi
    await connectDB();

    // Gọi middleware Express
    app(req, res);
};
