const express = require('express');
const router = express.Router();
const File = require("../model/fileModels")
router.get('/:uuid', async (req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        if (!file) {
            res.status(200).send("Link Has Already Expired");
        }
        const path = `${__dirname}/../${file.path}`;
        res.download(path);
    } catch (error) {
        console.log(error);
        res.send("error,please re upload");
        
    }
  
})



module.exports = router;