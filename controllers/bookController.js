const Book = require("../models/bookSchema");
const mongoose = require("mongoose")

exports.createBook = async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear ||
        !request.body.genre ||
        !request.body.status
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear, genre, status',
        });
      }
  
      const newBook = {
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
        publishYear: request.body.publishYear,
        status: request.body.status

      };
  
    //   const book = await Book.create(newBook);
  
      return response.status(201).send(newBook);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  };

exports.getAllBooks = async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};


exports.deleteBook = async (request, response) => {
    try {
      const { id } = request.params;
  
      const book = await Book.findByIdAndDelete(id);
  
      if (!book) {
        return response.status(404).json({
          message: 'Book not found',
        });
      }
      
      return response.status(200).json({
        message: 'Book deleted successfully',
      });
    } catch (error) {
      console.error(error.message);
      response.status(500).json({
        message: 'An error occurred while deleting the book',
      });
    }
  };


exports.editBook = async (request, response) => {
    try {
      const { id } = request.params; 
      const { title, author, publishYear, genre, status } = request.body; 
  
      if (!title || !author || !publishYear || !genre || !status) {
        return response.status(400).json({
          message: 'Please provide title, author, genre, status and publishYear to update the book.',
        });
      }
  
      const updatedBook = await Book.findByIdAndUpdate(
        id,
        { title, author, publishYear, genre, status },
        { new: true, runValidators: true } 
    );
    return response.status(200).json({
      message: 'Book updated successfully',
      data: updatedBook,
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({
      message: 'An error occurred while updating the book',
    });
  }
};