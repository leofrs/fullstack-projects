import { Router } from "express";
import { auth } from "../middlewares/auth";
import TaskController from "../controllers/task.controller";

const taskRouter = Router();
const taskController = new TaskController();

// Cria uma tarefa no banco de dados
taskRouter.post("/api/v1/auth/createTask", auth, taskController.createTask);

// Pega a tarefa do banco de dados conforme o autor da tarefa
taskRouter.get(
  "/api/v1/auth/getTaskByAuthor",
  auth,
  taskController.getAllTasksByAuthor
);
// Edita uma tarefa conforme o autor
taskRouter.put("/api/auth/task/editTask", auth, taskController.editTaskById);

// Marca como concluída
taskRouter.put(
  "/api/auth/task/editTaskConclude",
  auth,
  taskController.taskConclude
);

// Deleta uma tarefa conforme o author
taskRouter.delete(
  "/api/auth/task/delete-task",
  auth,
  taskController.deleteTaskById
);

export default taskRouter;
