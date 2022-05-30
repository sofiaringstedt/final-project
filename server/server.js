import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./config/db.js";
import userRoutes from "./routes/user.js"; 

dotenv.config();
connectDB();

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next()
  } else {
    res.status(503).json({
      status_code: 503,
      status_message: "Service Unavailable"
    })
  };
});

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("final project yaay!!");
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

