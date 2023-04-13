const mongoose = require("mongoose");

const connection = async () => {

    try {
        await mongoose.connect (
            // "mongodb+srv://damienlewis2k12:test123@cluster0.rw3bdle.mongodb.net/?retryWrites=true&w=majority"
            process.env.MONGO_CONNECTION_STRING
        );
    } catch (error) {
        console.log(error);
    }
    console.log("DB connection established");
};
connection();