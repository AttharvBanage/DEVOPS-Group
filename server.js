const express = require("express");
const app = express();
const path = require("path");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route for home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});