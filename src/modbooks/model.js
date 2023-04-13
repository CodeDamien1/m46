const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
    })
//create the class book
    const Book = mongoose.model("book", bookSchema)


    //export it so it can be used elsewhere in the project
    module.exports = Book;

//=========================================================================
//schema labelled out by inputs
//=========================================================================

// Book:
//     _id: string
//     title: string   
//     author: string
//     genre: string