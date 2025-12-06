const moongoose = require("mongoose");

const connectDB = async () => {
    try{
        await moongoose.connect(
            ""
        );
        console.log("Connected to DB");
    }catch(err){
        console.error("Error in connecting DB", err);
    }
};

module.exports = connectDB