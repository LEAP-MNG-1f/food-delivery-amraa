import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./routes/userRouter.js";
import foodRouter from "./routes/foodRouter.js";
import orderRouter from "./routes/orderRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import cloudinary from "cloudinary";

dotenv.config();

const server = express();
const PORT = 4000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// Middleware
server.use(cors());
server.use(bodyParser.json());

// Routes
server.use("/api", userRouter);
server.use("/api", foodRouter);
server.use("/api", orderRouter);
server.use("/api", categoryRouter);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
