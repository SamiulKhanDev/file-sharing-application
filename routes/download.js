const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config({ path: "../config/config.env" });
const File = require('../model/fileModels');
router.get('/:uuid', async(req, res) => {
    try {      
        const file = await File.findOne({ uuid: req.params.uuid });       
        if (!file) {
            return res.sendFile('../views/download.html',{error:"something went wrong"})
        }
        
       return res.sendFile('../views/download.html');
} catch (error) {
    return res.sendFile('../views/download.html',{error:"something went wrong"})
}
})


module.exports = router;