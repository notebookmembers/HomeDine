import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();
const port = 3000;

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`listening on port ${port}!`));
