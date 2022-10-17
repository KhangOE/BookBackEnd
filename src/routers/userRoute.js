const express = require("express");
const route = express.Router();
const IsLogin = require("../middleware/IsLogin");



const {
  registerUser,
  loginUser,
  getUser,
  getAllUsers
} = require("../controllers/userControllers");

// POST
// Register user
// Public
// api/user/register
route.post("/register", registerUser);

// POST
// Login user
// Public
// api/user/login
route.post("/login", loginUser);

// GET
// User Info
// Private
// api/user
route.get("/", IsLogin, getUser);
route.get("/getAll",getAllUsers);


module.exports = route;
