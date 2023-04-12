const express = require("express")
const app = express()


// app.use("/books", express.static("books"))
// app.use("/anotherroute", express.static("anotherroute"))
app.use (express.json())
app.get ("/book", (request, response) => {
    const book = {
        title:"Lord of the Rings",
        author:"Tolkien",
        genre:"fantasy"
    }
    const successResponse = {
        message: "response sent successfully",
        book: book
    }
    // response.send("hello from the book route")
    response.send(successResponse)
})


 app.get("/Anotherroute", (request, response) => {
    response.send("hello from route 2")

    const successResponse = {
        message: "response sent successfully",
        book: book
    }
    // response.send("hello from the book route")
    response.send(successResponse)
 })

app.post("/book", (request, response) => {
    const newBook = {
        id: "1234",
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    }
    const successSendResponse = {
        message: "response sent successfully",
        book: newBook
    }
    // response.send("hello from the book route")
    response.send(successSendResponse)
    })
    // response.send("hello from the post route")

app.put("/books/", (request, response) => {
    console.log(request.body);
    const newBook = request.body;
    const successResponse = {
        message: "new data updated",
        book: newBook
    }
    response.send(successResponse);
})


app.delete("/book", (request, response)=>{
    console.log(request.body);
    id = request.body.id;
    const successResponse ={
        message: "record has been deleted" + id,
        deleteRecord:id
    }
    response.send(successResponse);
})


app.listen(5001, () => console.log("server is listening"))