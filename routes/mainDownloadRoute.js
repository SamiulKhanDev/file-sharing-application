const express = require('express');
const router = express.Router();
const File = require("../model/fileModels")
router.get('/:uuid', async(req, res) => {
    const file = await File.findOne({ uuid: req.params.uuid });
    if (!file) {
        res.status(200).send("Link Has Already Expired");
    }
    const path = `${__dirname}/../${file.path}`;
    res.download(path);
})



module.exports = router;