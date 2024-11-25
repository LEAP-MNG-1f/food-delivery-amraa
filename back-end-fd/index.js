import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./connectDB.js";
import bodyParser from "body-parser";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import animeModel from "./model/food.js";
import userRouter from "./routes/userRouter.js";
import foodRouter from "./routes/foodRouter.js";
dotenv.config();

mongoose.connect(
  "mongodb+srv://enkhamirr:FUEp0XI9RXiABnAe@leap-test-amar.ijgzw.mongodb.net/food_db"
);

const server = express();
const PORT = 4000;

server.use(cors());
server.use(bodyParser.json());

server.use("/api", userRouter);
server.use("/api", foodRouter);

// server.post("/create", async (req, res) => {
//   const result = await animeModel.create({
//     name: "Цуйван",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Cujwan.JPG/1200px-Cujwan.JPG",
//     ingredient: "гурил, мах, тос, төмс, лууван, сонгино, чинжүү",
//     price: 20000,
//   });
//   res.json({
//     success: true,
//     data: result,
//   });
// });

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
