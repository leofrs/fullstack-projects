import { Router } from "express";
import { auth } from "../middlewares/auth";
import TaskController from "../controllers/task.controller";

const taskRouter = Router();
const taskController = new TaskController();

// Cria uma tarefa no banco de dados
taskRouter.post("/api/v1/createTask", auth, taskController.createTask);

// Pega a tarefa do banco de dados conforme o autor da tarefa
taskRouter.get(
  "/api/v1/auth/getTaskByAuthor",
  auth,
  taskController.getAllTasksByAuthor
);
// Edita uma tarefa conforme o autor
/* taskRouter.post(
  "/api/auth/task/editTask",
  auth,
  taskController.editTaskById
); */

taskRouter.get("/api/auth/task/getTask/:id", auth, taskController.getTaskById);
// Deleta uma tarefa conforme o author
taskRouter.delete(
  "/api/auth/task/delete-task/:id",
  auth,
  taskController.deleteTaskById
);

export default taskRouter;
