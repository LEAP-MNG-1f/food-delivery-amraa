import express from "express";

import {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", getAllCategory);
categoryRouter.post("/create-category", createCategory);
categoryRouter.put("/update-category/:id", updateCategory);
categoryRouter.delete("/delete-category/:id", deleteCategory);

export default categoryRouter;
