const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config()
connectDB();
const app = express();

app.get("/", (req, res) => {
    res.send("Working...")
});

const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`Server started on port ${PORT}`))

