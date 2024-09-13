import { Request, Response } from "express";
import TaskPrisma from "../services/prismaTask.service";
import { CustomRequest } from "../middlewares/auth";
import {
  EditTask,
  TaskConclude,
  TaskInformations,
} from "../@types/custom-types";

const taskPrisma = new TaskPrisma();

class TaskController {
  async createTask(req: CustomRequest, res: Response) {
    const { title, description } = req.body as TaskInformations;
    const userId = req.token?.userId;

    if (!title || !userId) {
      return res.status(400).send("Title e userId são obrigatorios.");
    }

    try {
      const create = await taskPrisma.createTask({
        title,
        description,
        authorId: Number(userId),
      });
      res.status(201).json(create);
    } catch (error) {
      res.status(501).json({ Error: "Error interno encontrado: " + error });
    }
  }

  async getAllTasksByAuthor(req: CustomRequest, res: Response) {
    try {
      const userId = req.token?.userId;

      if (!userId) {
        return res.status(401).json({ error: "Usuário não autenticado" });
      }

      const tasks = await taskPrisma.getAllTaskByAuthor(userId);

      if (tasks && tasks.length > 0) {
        res.status(200).json(tasks);
      } else {
        res.status(404).json({ message: "Nenhuma tarefa encontrada" });
      }
    } catch (error) {
      res.status(500).json({ Error: `Erro interno encontrado: ${error}` });
    }
  }

  async getTaskById(req: Request, res: Response) {
    try {
      const taskId = req.params.id;
      const task = await taskPrisma.getTaskId(Number(taskId));

      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      res.json(task);
    } catch (error) {
      console.error("Error fetching task:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async editTaskById(req: Request, res: Response) {
    const { id, title, description } = req.body as EditTask;
    if (!id && !title) {
      res
        .status(401)
        .json({ Error: `Os campos id e title não podem estar vázios` });
    }
    try {
      const edit = taskPrisma.editById({ id, title, description });
      if (!edit) {
        res
          .status(301)
          .json({ Error: `Um error foi encontrado! Tente novamente` });
      } else {
        res.status(201).json({ Sucesso: `Tarefa editada com sucesso` });
      }
    } catch (error) {
      res.status(501).json({ Error: `Error interno encontrado: ${error}` });
    }
  }

  async taskConclude(req: Request, res: Response) {
    const { id, isChecked } = req.body as TaskConclude;
    if (!id && !isChecked) {
      res
        .status(401)
        .json({ Error: `Os campos id e isChecked não podem estar vázios` });
    }
    try {
      const conclude = taskPrisma.taskFinished({ id, isChecked });
      if (!conclude) {
        res
          .status(301)
          .json({ Error: `Um error foi encontrado! Tente novamente` });
      } else {
        res.status(201).json({ Sucesso: `Tarefa editada com sucesso` });
      }
    } catch (error) {
      res.status(501).json({ Error: `Error interno encontrado: ${error}` });
    }
  }

  async deleteTaskById(req: Request, res: Response) {
    const { id } = req.body;
    if (!id) {
      res.status(401).json({ Error: `Os campos id  não pode estar vázios` });
    }
    try {
      const del = taskPrisma.deleteById(id);
      if (!del) {
        res
          .status(301)
          .json({ Error: `Um error foi encontrado! Tente novamente` });
      } else {
        res.status(201).json({ Sucesso: `Tarefa delatada com sucesso` });
      }
    } catch (error) {
      res.status(501).json({ Error: `Error interno encontrado: ${error}` });
    }
  }
}

export default TaskController;
