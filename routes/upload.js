const express = require("express");
const route = express.Router();
const path = require("path");
route.get('/', (req, res) => {
    // res.send("welcome to home")
    // res.status(200).sendFile('/views/upload.html');
    res.status(200).sendFile(path.join(__dirname,"../views","upload.html"));
})


module.exports = route;