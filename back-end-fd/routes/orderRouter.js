import express from "express";

import { createOrder, getAllorder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/orders", getAllorder);
orderRouter.post("/orders", createOrder);

export default orderRouter;
