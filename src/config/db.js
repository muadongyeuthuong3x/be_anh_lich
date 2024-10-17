const mongoose = require("mongoose");

let dbConnection;

async function connectDB() {
    if (!dbConnection) {
        try {
            dbConnection = await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("Database connected");
        } catch (err) {
            console.error("Database connection error:", err);
            throw err; // Ném lại lỗi để xử lý ở nơi khác
        }
    }
    return dbConnection;
}

module.exports = connectDB;
