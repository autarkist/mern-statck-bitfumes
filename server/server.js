import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose, { mongo } from "mongoose";
import cors from "cors"

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURL);
    console.log("mongodb connection is successful");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB has been disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB has been connected again");
});

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
