import express from "express";
import { createFood, getAllFood } from "../controllers/foodController.js";

const foodRouter = express.Router();

foodRouter.get("/foods", getAllFood);
foodRouter.post("/foods", createFood);

export default foodRouter;
