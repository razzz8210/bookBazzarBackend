import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import BookRoute from "./route/book.route.js";
import UserRoute from "./route/user.route.js";
import cors from "cors";


const app = express()
app.use(express.json());
const corsOptions = {
    origin: ['https://book-bazzar-frontend.vercel.app','http://localhost:5173','http://localhost:5174','*'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only required methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Include any necessary headers
    credentials: true,
  };
  
  app.use(cors(corsOptions));
dotenv.config()

const port=process.env.PORT||3000;

//connect to mongodb
const mongodbURI=process.env.MONGODBURI
try {
    mongoose.connect(mongodbURI);
    console.log("Connected to mongodb")
} catch (error) {
    console.log(error)
}

app.use("/book",BookRoute);
app.use("/user",UserRoute);
app.get("/", (req, res) => {
  res.send("Welcome to the Book Bazzar API");
});

app.listen(port, () => {
  console.log(`App listning on port ${port}`)
})