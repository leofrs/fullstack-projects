import { Router } from "express";
import UserController from "../controllers/user.controller";
import { auth } from "../middlewares/auth";

const userRouter = Router();
const userController = new UserController();

//Create User
userRouter.post("/api/v1/createUser", userController.createUser);
//Login User
userRouter.post("/api/v1/loginUser", userController.loginUser);

export default userRouter;
