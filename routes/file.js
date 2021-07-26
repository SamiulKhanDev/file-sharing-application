const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path')
const dotenv = require('dotenv')
const {v4:uuid4} = require('uuid');
const file = require("../model/fileModels")

dotenv.config({path:"../config/config.env"})


const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uplodedFiles/'),
    filename: (req, file, cb) => {
        const un = `${uuid4()}-${path.extname(file.originalname)}`
        cb(null, un);
    }
})

const upload = multer({
    storage,
    limits: { fileSize: 1000000 * 100 },
}).single("myfile");



router.post('/', (req, res) => {
   
    upload(req, res, async (err) => {
    
        
        if (!req.file) {
            res.status(404).json({Error:"all fildes are required"})
        }
        if (err) {
            res.status(500).send({error:"invalid fillUp"})
        }
        const newFile = new file({
            filename: req.file.filename,
            uuid: uuid4(),
            path: req.file.path,
            size:req.file.size,
            
        })

        
        try {
            const resp = await newFile.save();   
            return res.json({file:`${process.env.FILE_BASE_URL}/files/${resp.uuid}`})
        } catch (err) {
            res.status(500).send("sorry,operation failed");
            console.log(err);
            
        }

    })
  
})






module.exports = router;

