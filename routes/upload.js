const express = require("express");
const route = express.Router();

route.get('/', (req, res) => {
    res.send("welcome to home")
    // res.status(200).sendFile('FILESHARINGAPPLICATION/views/upload.html');
})


module.exports = route;