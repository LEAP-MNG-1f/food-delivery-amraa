import express from "express";
import { createUser, getAllUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUser);
userRouter.post("/users", createUser);

export default userRouter;
