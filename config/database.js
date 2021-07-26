const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:"config/config.env"})




const db = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log("database is connected");
        
    } catch (error) {
        console.log("server error");
        process.exit(1);
        
    }  
}

module.exports = db;