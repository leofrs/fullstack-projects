import { Router } from "express";
import { auth } from "../middlewares/auth";
import AdminController from "../controllers/admin.controller";

const adminRouter = Router();
const adminController = new AdminController();

adminRouter.post("/api/v1/adminLogin", adminController.login);
adminRouter.get("/api/v1/auth/getAllUsers", auth, adminController.getAllUsers);

export default adminRouter;
