const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const db = require("./config/database.js")
const fileRoute = require('./routes/file')
const downloadRoute = require("./routes/download")
const uploadRoute = require('./routes/upload');
const downoadFile = require('./routes/showFile')
const mainDownLoadRoute = require('./routes/mainDownloadRoute')
const path = require('path');


dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT || 5000;
app.use("/static", express.static("static"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/file', fileRoute);
app.use('/',uploadRoute);
app.use('/files', downloadRoute);
app.use('/download', downoadFile);
app.use('/files/download',mainDownLoadRoute)
db();


app.listen(port, () => {
    console.log("server is ready");
    
})
