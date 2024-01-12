const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config()

app.get("/", (req, res) => {
    res.send("Working...")
});

const PORT = process.env.PORT || 3000
app.listen(3000, console.log(`Server started on port ${PORT}`))

