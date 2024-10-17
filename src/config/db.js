const mongoose = require("mongoose");

let dbConnection;

async function connectDB() {
    if (!dbConnection) {
        try {
            dbConnection = await mongoose.connect(process.env.MONGODB_URI, {
                // No need for useNewUrlParser and useUnifiedTopology
            });
            console.log("Database connected");
        } catch (err) {
            console.error("Database connection error:", err);
            throw err; // Re-throw the error for handling elsewhere
        }
    }
    return dbConnection;
}

module.exports = connectDB;
