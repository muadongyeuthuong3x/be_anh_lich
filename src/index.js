const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// Middleware setup
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Define routes
app.use('/api', router);

// Export serverless function
module.exports = async (req, res) => {
    try {
        // Connect to the database
        await connectDB();
        console.log('Database connected');

        // Set the port from environment variable
        const PORT = process.env.PORT || 3000;

        // Handle incoming requests with Express
        return app(req, res);
    } catch (error) {
        console.error('Database connection error:', error);
        return res.status(500).send('Internal Server Error');
    }
};

// Optional: Local testing setup
if (require.main === module) {
    app.listen(6868, () => {
        console.log(`Server is running on port `);
    });
}
