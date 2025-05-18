
const express = require("express")

const {createBook, getAllBooks, deleteBook, editBook} =  require("../controllers/bookController");

const router = express.Router();

router.post('/', createBook);

router.get('/', getAllBooks);

router.delete('/:id', deleteBook);

router.put('/:id', editBook);



module.exports = router;
