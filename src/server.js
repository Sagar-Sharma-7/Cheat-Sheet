const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

const websitePath = path.join(__dirname, "../");

app.use(express.static(websitePath));

app.use('*', (req, res) => {
    res.sendFile(websitePath + "index.html");
});

app.listen(port, () => {
    console.log("Server is live now!!!")
});