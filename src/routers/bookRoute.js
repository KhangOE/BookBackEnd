//import { createBook,getAllBooks,getNewBooks} from "../controllers/bookController";
import {
  createBook,
  createBookReview,
  deleteBook,
  deleteReview,
  getAdminBooks,
  getAllBooks,
  getMostReviewBooks,
  getNewBooks,
  getPopularBooks,
  getRatedBooks,
  getSingleBook,
  getSingleBookReviews,
  updateBook,
} from "../controllers/bookController.js";
const express = require("express");
const route = express.Router();
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')




route.route("/add").post(createBook);

route.route("/").get(getAllBooks);
route.route("/img").get(async (req,res) => {
  try {
     const myCloud = await cloudinary.uploader.upload('2022.jpg')
  } catch (error) {
    
  }
  
});

module.exports = route;
