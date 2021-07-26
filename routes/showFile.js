const express = require('express');
const router = express.Router();
const File = require('../model/fileModels');

router.get('/:uuid', async (req, res) => {    
    try {
        
        const file = await File.findOne({ uuid: req.params.uuid });
       return res.status(200).json({
            uuid: file.uuid,
            filename: file.filename,
            size: file.size,
            download:`${process.env.FILE_BASE_URL }files/download/${file.uuid}`
        })
    } catch (error) {
        console.log(error);
        
    }
})


module.exports = router;