const mongoose = require('mongoose');
const fileSchema =new  mongoose.Schema({
    filename: {
        type: String,
        required:true,
    },
    path: {
        type: String,
        required:true,
    },
    size: {
        type: Number,
        required:true
    },
    uuid: {
        type: String,
        required:true,
    }, 
    senderEmail: {
        type: String,
        required:false,
    },
    receiverEmail: {
        type: String,
        required:false,
    },
},{
    timestamps: true,
    })

module.exports = mongoose.model("fileDt", fileSchema);