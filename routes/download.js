const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const path = require("path");
dotenv.config({ path: "../config/config.env" });
const File = require('../model/fileModels');
router.get('/:uuid', async(req, res) => {
    try {      
        const file = await File.findOne({ uuid: req.params.uuid });       
        if (!file) {
            return res.sendFile(path.join(__dirname,"../views","download.html"),{error:"something went wrong"})
        }
        
       return res.sendFile(path.join(__dirname,"../views","download.html"));
} catch (error) {
    return res.sendFile(path.join(__dirname,"../views","download.html"),{error:"something went wrong"})
}
})


module.exports = router;