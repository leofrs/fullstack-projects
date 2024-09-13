"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userRouter = (0, express_1.Router)();
const userController = new user_controller_1.default();
//Create User
userRouter.post("/api/v1/createUser", userController.createUser);
//Login User
userRouter.post("/api/v1/loginUser", userController.loginUser);
exports.default = userRouter;
