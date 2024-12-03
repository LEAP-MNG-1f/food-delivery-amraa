import express from "express";

import {
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/orders", getOrder);
orderRouter.post("/create-order", createOrder);
orderRouter.patch("/patch-order-process/:_id", updateOrder);
orderRouter.delete("/delete-order/:id", deleteOrder);

export default orderRouter;
