import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import BookRoute from "./route/book.route.js";
import UserRoute from "./route/user.route.js";
import cors from "cors";


const app = express()
app.use(cors());
app.use(express.json());

dotenv.config()

const port=process.env.PORT||3000;

//connect to mongodb
const mongodbURI=process.env.mongodbURI
try {
    mongoose.connect(mongodbURI,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongodb")
} catch (error) {
    console.log(error)
}

app.use("/book",BookRoute);
app.use("/user",UserRoute);

app.listen(port, () => {
  console.log(`App listning on port ${port}`)
})