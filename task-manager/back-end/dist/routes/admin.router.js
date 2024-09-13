"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const admin_controller_1 = __importDefault(require("../controllers/admin.controller"));
const adminRouter = (0, express_1.Router)();
const adminController = new admin_controller_1.default();
adminRouter.post("/api/v1/adminLogin", adminController.login);
adminRouter.get("/api/v1/auth/getAllUsers", auth_1.auth, adminController.getAllUsers);
exports.default = adminRouter;
