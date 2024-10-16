module.exports = async (req, res) => {
    try {
        await connectDB();
        app(req, res);
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).send(error);
    }
};
