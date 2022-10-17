// App


const express = require("express");
const bodyParser = require("body-parser");
import cors from 'cors';
const mongoose = require("mongoose");


import { v2 as cloudinary } from 'cloudinary'


const streamifier = require('streamifier')
require("dotenv").config();

// Routersnp
import bookRoute from "./routers/bookRoute";
//import {bookRoute from "./routers/bookRoute";
const userRoute = require("./routers/userRoute");
//const bookRoute = require("./routers/bookRoute");
//const userRouter = require('./routers/userRoute')
/*
const videoRoute = require("./routers/videoRoute");
const subsrciptionRoute = require("./routers/subsrciptionRoute");
const favouriteRoute = require("./routers/video_favouriteRoute");
const channelRoute = require("./routers/channelRoute");
const commentRoute = require("./routers/commentRoute");
*/
const app = express();
//const URLDB = `mongodb+srv://${process.env.NAME}:${process.env.PASSWORDMONGO}@youtube-clone.skcs0.mongodb.net/youtube-clone?retryWrites=true&w=majority`;

// connectDB
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://19521663:0383880624As@cluster0.rb69lbi.mongodb.net/?retryWrites=true&w=majority');
    console.log("connect DB success!");
  } catch (error) {
    console.log(error);
    process.exit(-1);
  }
};

connectDB();

// config body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors
app.use(cors());


// config route

app.get('/', (req,res)=>{
  cloudinary.uploader
.upload("src\\2022.jpg").then(()=>{
  console.log('1234')
  return res.send('1235')
})})

app.post('/', (req,res)=>{
  cloudinary.uploader
.upload(req.body.avatar).then(()=>{
  console.log('1234')
  return res.send('1235')
})})







app.use("/api/book/",bookRoute);
app.use("/api/user", userRoute);
//app.use("/api/video", videoRoute);
//app.use("/api/sub", subsrciptionRoute);
//app.use("/api/favourite", favouriteRoute);
//app.use("/api/channel", channelRoute);
//app.use("/api/comment", commentRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}!`);
});
