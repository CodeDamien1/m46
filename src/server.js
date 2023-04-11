const express = require("express")
const app = express()


app.use("/books", express.static("books"))
app.use("/anotherroute", express.static("anotherroute"))
app.use("/music", express.static("music"))
app.use("/about", express.static("about"))
app.use("/home", express.static("home"))



app.listen(5001, () => console.log("server is listening"))