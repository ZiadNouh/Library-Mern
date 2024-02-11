import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import bookRoutes from "./routes/bookRouts.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5555;
const mongoDBURL = process.env.mongoDBURL;

app.get("/", (req, res, next) => {
  return res.status(200).send("Welcome to the home route");
});

app.use("/books", bookRoutes);

mongoose.connect(mongoDBURL).then(() => {
  try {
    console.log("DB is connented");
    app.listen(PORT, console.log(`app is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
});
