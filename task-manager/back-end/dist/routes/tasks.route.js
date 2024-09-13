"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
const taskRouter = (0, express_1.Router)();
const taskController = new task_controller_1.default();
// Cria uma tarefa no banco de dados
taskRouter.post("/api/v1/auth/createTask", auth_1.auth, taskController.createTask);
// Pega a tarefa do banco de dados conforme o autor da tarefa
taskRouter.get("/api/v1/auth/getTaskByAuthor", auth_1.auth, taskController.getAllTasksByAuthor);
// Edita uma tarefa conforme o autor
taskRouter.put("/api/auth/task/editTask", auth_1.auth, taskController.editTaskById);
// Marca como concluída
taskRouter.put("/api/auth/task/editTaskConclude", auth_1.auth, taskController.taskConclude);
// Deleta uma tarefa conforme o author
taskRouter.delete("/api/auth/task/delete-task", auth_1.auth, taskController.deleteTaskById);
exports.default = taskRouter;
