const express = require("express");
const route = express.Router();

route.get('/', (req, res) => {
    res.status(200).sendFile('/Users/samiulkhan/Downloads/FileSharingApplication/views/upload.html');
})


module.exports = route;