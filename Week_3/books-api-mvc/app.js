const express = require("express");
const bodyParser = require("body-parser");
const booksController = require("./controllers/bookController"); // Import controllers
const validateBook = require("./middlewares/validateBook");
const request = require("./middlewares/request");
const app = express();


app.use(bodyParser.json()); // Parse incoming JSON data in request body
app.use(bodyParser.urlencoded({ extended: true })); // For form data handling
// Define individual routes for each controller function
/*app.get("/books", booksController.getAllBooks);
app.get("/books/:id", booksController.getBookById);
app.post("/books", validateBook, booksController.createBook); // Add validateBook before createBook
app.put("/books/:id", validateBook, booksController.updateBook); // Add validateBook before updateBook
app.delete("/books/:id", booksController.deleteBook);
*/
app.get("/books", request, booksController.getAllBooks);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
