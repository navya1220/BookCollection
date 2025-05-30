
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publishYear: { type: Number, required: true },
  status: { type: String, required: true },
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book; 
