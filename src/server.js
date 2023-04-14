
const express = require("express");
const app = express();
require("dotenv").config();
require("./db/connection");
//=================================================================
const Book = require("./modbooks/model");
app.use(express.json());
//=========================================
// gets the info
//=========================================
app.get("/books/getallbooks", async (req, res) => {
    const successResponse = {
        message: "Response sent successfully",
        books: bookInv
      }
    
      response.send(successResponse);
});
//=========================================
// posts new info
//=========================================
app.post("/books/addbook", async (req, res) => {
    const newBook = newBook.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
});
response.status(201).json({ message: "OK", data: book });
});
//=========================================
// updates the info
//=========================================
app.put("/books/updatebookauthor", async (req, res) => {
    const match = bookInv.findById(req.params.id);

  if (match) {
    const updateBook = {
      id: match.id,
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre
    }

    match.title = updateBook.title ?? match.title;
    match.author = updateBook.author ?? match.author;
    match.genre = updateBook.genre ?? match.genre;

    response.send("Input updated");
  } else {
    response.sendStatus(400);
  }
});
//=========================================
// deletes input
//=========================================
app.delete("/books/deletebook", async (req, res) => {
    const match = bookInv.find(book => book.id === parseInt(request.params.id));
//   const match = bookInv.find(book => book.id === parseInt(request.params.id)); <===helps find specific id
  if (match) {
    bookInv = bookInv.filter(book => book.id !== match.id);
    response.send("Input Deleted");
  } else {
    response.sendStatus(400);
  }
});

//=================================================================

app.listen(5001, () => console.log("Listen server now open"));
